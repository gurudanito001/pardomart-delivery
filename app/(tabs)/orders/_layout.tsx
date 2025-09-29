import { Stack } from 'expo-router';
import React from 'react';

export default function OrdersLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="shopping-list" />
      <Stack.Screen name="finding-items" />
      <Stack.Screen name="finding-item" />
      <Stack.Screen name="item-substitution" />
      <Stack.Screen name="complete-shopping" />
      <Stack.Screen name="success" />
      <Stack.Screen name="verify-order-code" />
    </Stack>
  );
}
