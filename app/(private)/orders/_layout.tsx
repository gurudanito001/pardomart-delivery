import { Stack } from "expo-router";
import React from "react";

export default function OrdersLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
       <Stack.Screen name="shopping-list" />
       <Stack.Screen name="location-check" />
       <Stack.Screen name="finding-items" />
       <Stack.Screen name="finding-item" />
       <Stack.Screen name="preview-page" />
       <Stack.Screen name="item-substitution" />
       <Stack.Screen name="success" />
       <Stack.Screen name="verify-order-code" />
       <Stack.Screen name="delivery-verification" />
+      <Stack.Screen name="order-preview" />
+      <Stack.Screen name="start-trip" />
+      <Stack.Screen name="arrived-store" />
+      <Stack.Screen name="store-arrived" />
+      <Stack.Screen name="end-trip" />
+      <Stack.Screen name="delivery-completed" />
+      <Stack.Screen name="back-to-store" />
+      <Stack.Screen name="return-confirm-arrival" />
+      <Stack.Screen name="return-delivery-success" />
+      <Stack.Screen name="return-success" />
+      <Stack.Screen name="verify-order-return" />
    </Stack>
  );
}
