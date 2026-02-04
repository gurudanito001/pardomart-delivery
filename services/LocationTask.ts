import * as TaskManager from 'expo-task-manager';
import * as SecureStore from 'expo-secure-store';
import { OrderApiFactory } from '@/api/endpoints/order-api';
import { Configuration } from '@/api/configuration';

export const LOCATION_TASK_NAME = 'background-location-task';

// Define the task in global scope
TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }: any) => {
  if (error) {
    console.error('Location task error:', error);
    return;
  }

  if (data) {
    const { locations } = data;
    const location = locations[0]; // Get the most recent location

    if (location) {
      try {
        // 1. Retrieve Order ID and Token from storage
        const orderId = await SecureStore.getItemAsync('current_active_order_id');
        const token = await SecureStore.getItemAsync('user_token');

        if (!orderId || !token) return;

        // 2. Configure API with the token
        // Replace with your actual API base URL
        const basePath = process.env.EXPO_PUBLIC_API_URL || 'https://api.pardomart.com'; 
        
        const config = new Configuration({
            accessToken: token,
            basePath: basePath
        });
        const orderApi = OrderApiFactory(config);

        // 3. Send to Backend
        await orderApi.ordersOrderIdDeliveryLocationPost(
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
          orderId
        );
      } catch (err) {
        console.error('Failed to send background location:', err);
      }
    }
  }
});