import { Stack } from "expo-router";
import React from "react";

export default function OrdersLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="shopping-list" />
      <Stack.Screen name="location-check" />
      <Stack.Screen name="finding-items" />
      <Stack.Screen name="finding-item" />
      <Stack.Screen name="preview-page" />
      <Stack.Screen name="item-substitution" />
      <Stack.Screen name="success" />
      <Stack.Screen name="verify-order-code" />
      <Stack.Screen name="delivery-verification" />
    </Stack>
  );
}
