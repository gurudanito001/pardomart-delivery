import { Stack } from 'expo-router';
import React from 'react';

export default function StoreLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="arrived-store" />
      <Stack.Screen name="code-verified" />
    </Stack>
  );
}
