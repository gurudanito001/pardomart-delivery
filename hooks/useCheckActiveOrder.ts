// hooks/useCheckActiveOrder.ts

import { OrderApi } from '@/api';
import { apiConfig } from '@/api/config';
import { OrderStatus } from '@/api/models';
import { useQuery } from '@tanstack/react-query';
import { useRouter, useSegments } from 'expo-router';
import { useEffect, useMemo } from 'react';

export const useCheckActiveOrder = () => {
  const router = useRouter();
  const segments = useSegments();
  const orderApi = useMemo(() => new OrderApi(apiConfig), []);

  const { data: activeOrder, isLoading } = useQuery({
    queryKey: ['activeOrder'],
    queryFn: async () => {
      try {
        const response = await orderApi.orderActiveMeGet();
        // The API returns 200 with the order, or empty/null if none
        console.log("Active Order Response:", response.data);
        return response.data || null;
      } catch (error) {
        // Treat errors (like 404) as no active order
        return null;
      }
    },
    // Avoid excessive retries to keep the UI responsive
    retry: 1,
  });

  const segmentsKey = segments.join('/');

  useEffect(() => {
    // Do nothing while loading or if no order exists
    if (isLoading || !activeOrder) return;

    // Only redirect if we are on the Home Index screen.
    // This prevents the redirect from blocking navigation to other tabs or sub-screens.
    const isHomeIndex = segments[segments.length - 1] === 'home';
    if (!isHomeIndex) return;

    const orderId = activeOrder.id;
    if (!orderId) return;

    // Determine where to send the user based on the order status
    switch (activeOrder.orderStatus) {
      // --- Shopping Stage ---
      case OrderStatus.AcceptedForShopping:
      case OrderStatus.AcceptedForDelivery:
      case OrderStatus.EnRouteToPickup:
        router.replace({
          pathname: '/(private)/orders/start-trip',
          params: { id: orderId },
        });
        break;

      case OrderStatus.ArrivedAtStore:
        router.replace({
          pathname: '/(private)/orders/store-arrived',
          params: { id: orderId },
        });
        break;

      case OrderStatus.CurrentlyShopping:
        router.replace({
          pathname: '/(private)/orders/finding-items',
          params: { id: orderId },
        });
        break;

      case OrderStatus.CompletedBagging:
        router.replace({
          pathname: '/(private)/orders/preview-page',
          params: { id: orderId },
        });
        break;

      // --- Delivery Stage ---
      case OrderStatus.ReadyForDelivery:
        router.replace({
          pathname: '/(private)/orders/verify-order-code',
          params: { orderId: orderId },
        });
        break;

      case OrderStatus.EnRouteToDelivery:
        router.replace({
          pathname: '/(private)/orders/start-trip',
          params: { id: orderId },
        });
        break;


      // --- Return Stage ---
      /* case OrderStatus.EnRouteToReturnPickup:
      case OrderStatus.ArrivedAtReturnPickupLocation:
      case OrderStatus.EnRouteToReturnToStore:
        router.replace({
          pathname: '/(private)/orders/start-trip',
          params: { id: orderId },
        });
        break; */

      default:
        // For statuses like 'pending' or 'delivered', we stay on home
        break;
    }
  }, [activeOrder, isLoading, segmentsKey, router]);

  return { isLoading, activeOrder };
};
