import { Tabs } from 'expo-router';
import React from 'react';
import { 
  HomeFilledIconSVG, 
  HomeOutlineSVG, 
  OrdersIconSVG, 
  InboxIconSVG, 
  HelpIconSVG, 
  ProfileIconSVG 
} from '../../components/icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 'auto',
          backgroundColor: '#FFF',
          borderTopWidth: 0,
          paddingTop: 16,
          paddingBottom: 16,
          paddingHorizontal: 17,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: '#0085FF',
        tabBarInactiveTintColor: '#484C52',
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Raleway',
          fontWeight: '600',
          lineHeight: 16,
          marginTop: 6,
        },
        tabBarItemStyle: {
          paddingHorizontal: 0,
        },
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => {
            return focused ? (
              <HomeFilledIconSVG width={24} height={24} color={color} />
            ) : (
              <HomeOutlineSVG width={24} height={24} color={color} />
            );
          },
        }} 
      />
      <Tabs.Screen 
        name="orders" 
        options={{ 
          title: 'Orders',
          tabBarIcon: ({ color }: { color: string; }) => (
            <OrdersIconSVG width={24} height={24} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="inbox" 
        options={{ 
          title: 'Inbox',
          tabBarIcon: ({ color }: { color: string; }) => (
            <InboxIconSVG width={24} height={24} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="help" 
        options={{ 
          title: 'Help',
          tabBarIcon: ({ color }: { color: string; }) => (
            <HelpIconSVG width={24} height={24} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="store" 
        options={{ 
          title: 'Profile',
          tabBarIcon: ({ color }: { color: string; }) => (
            <ProfileIconSVG width={24} height={24} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}
