import 'react-native-reanimated';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useColorScheme, ActivityIndicator, View } from 'react-native';
import { useFonts } from 'expo-font';
import {
  Raleway_400Regular,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from '@expo-google-fonts/raleway';
import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import {
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/lib/toast';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    // Register base family names used across the app
    'Raleway': Raleway_400Regular,
    'Raleway-600': Raleway_600SemiBold,
    'Raleway-700': Raleway_700Bold,

    'Open Sans': OpenSans_400Regular,
    'Open Sans-600': OpenSans_600SemiBold,
    'Open Sans-700': OpenSans_700Bold,

    'Nunito Sans': NunitoSans_400Regular,
    'Nunito Sans-600': NunitoSans_600SemiBold,
    'Nunito Sans-700': NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* AuthProvider will redirect to either auth or (tabs) depending on stored token */}
      <AuthProvider>
        <Stack initialRouteName="auth" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="auth" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="go-online" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <Toaster position="top-center" />
      </AuthProvider>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}
