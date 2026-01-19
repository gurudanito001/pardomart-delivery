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
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          display: "flex",
          paddingHorizontal: 17,
          height: 70,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarItemStyle: {
          alignSelf: "center",
          paddingHorizontal: 2,
          flex: 1,
          alignItems: "center",
        },
        tabBarActiveTintColor: '#0085FF',
        tabBarInactiveTintColor: '#484C52',
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: "Raleway",
          fontWeight: "400",
          lineHeight: 16,
          marginTop: 4,
          marginBottom: 0,
          paddingBottom: 0,
        },
        tabBarIconStyle: {
          marginBottom: 0,
        },
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
