import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import * as SecureStore from 'expo-secure-store';
import { LOCATION_TASK_NAME } from '@/services/LocationTask';

export const useDeliveryTrip = () => {
  const [isTracking, setIsTracking] = useState(false);

  // Check if tracking is already running on mount
  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = async () => {
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME);
    setIsTracking(hasStarted);
  };

  const startTrip = async (orderId: string) => {
    try {
      const { status: fgStatus } = await Location.requestForegroundPermissionsAsync();
      if (fgStatus !== 'granted') {
        console.warn('Foreground location permission denied');
        return false;
      }

      const { status: bgStatus } = await Location.requestBackgroundPermissionsAsync();
      if (bgStatus !== 'granted') {
        console.warn('Background location permission denied');
      }

      await SecureStore.setItemAsync('current_active_order_id', orderId);

      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced,
        timeInterval: 10000,
        distanceInterval: 20,
        showsBackgroundLocationIndicator: true,
        foregroundService: {
          notificationTitle: "Delivery in Progress",
          notificationBody: "Sharing your location with the customer",
          notificationColor: "#0085FF",
        },
      });

      setIsTracking(true);
      return true;
    } catch (error) {
      console.error('Error starting trip:', error);
      return false;
    }
  };

  const stopTrip = async () => {
    try {
      const hasStarted = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME);
      if (hasStarted) {
        await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
      }
      await SecureStore.deleteItemAsync('current_active_order_id');
      setIsTracking(false);
    } catch (error) {
      console.error('Error stopping trip:', error);
    }
  };

  return { isTracking, startTrip, stopTrip };
};