import { Stack } from "expo-router";


export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="go-online" />
      <Stack.Screen name="index" />
      <Stack.Screen name="edit-profile" />
      <Stack.Screen name="wallet" />
      <Stack.Screen name="history" />
      <Stack.Screen name="payment" />
    </Stack>
  );
}
