import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { HomeSVG, HomeOutlineSVG } from '../../components/icons';

const TAB_ICONS: Record<string, { active: keyof typeof Ionicons.glyphMap; inactive: keyof typeof Ionicons.glyphMap }> = {
  home: { active: 'home', inactive: 'home-outline' },
  orders: { active: 'document-text', inactive: 'document-text-outline' },
  inbox: { active: 'chatbubbles', inactive: 'chatbubbles-outline' },
  help: { active: 'help-circle', inactive: 'help-circle-outline' },
  profile: { active: 'person', inactive: 'person-outline' },
};

const TAB_BAR_STYLE = (scheme: ColorSchemeName) => ({
  backgroundColor: scheme === 'dark' ? '#101013' : '#FFFFFF',
  borderTopWidth: 0,
  height: 88,
  paddingTop: 12,
  paddingBottom: 20,
  paddingHorizontal: 16,
  elevation: 0,
  shadowOpacity: 0,
});

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={({ route }: { route: { name: string } }) => {
        const icon = TAB_ICONS[route.name] ?? TAB_ICONS.home;

        return {
          headerShown: false,
          tabBarStyle: TAB_BAR_STYLE(colorScheme),
          tabBarActiveTintColor: '#0085FF',
          tabBarInactiveTintColor: isDark ? '#A2A7B4' : '#484C52',
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Raleway',
            fontWeight: '600',
          },
          tabBarIcon: ({ color, size, focused }: { color: string; size?: number; focused?: boolean }) => {
            // Use custom SVG for home icon to match design
            if (route.name === 'home') {
              return focused ? (
                <HomeSVG width={size ?? 24} height={size ?? 24} color={color} />
              ) : (
                <HomeOutlineSVG width={size ?? 24} height={size ?? 24} color={color} />
              );
            }

            // Use Ionicons for other tabs
            return (
              <Ionicons
                name={focused ? icon.active : icon.inactive}
                size={size ?? 24}
                color={color}
              />
            );
          },
        };
      }}
    >
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="orders" options={{ title: 'Orders' }} />
      <Tabs.Screen name="inbox" options={{ title: 'Inbox' }} />
      <Tabs.Screen name="help" options={{ title: 'Help' }} />
      <Tabs.Screen name="store" options={{ title: 'Store' }} />
    </Tabs>
  );
}
