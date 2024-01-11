import { useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import { Drawer } from 'expo-router/drawer';
import { DrawerActions } from '@react-navigation/native';
import { router } from 'expo-router';

const DrawerNavigation = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerType: 'front',
        drawerStyle: {
          width: 200,
          backgroundColor: 'orange',
        },
        drawerActiveBackgroundColor: 'transparent',
        headerTitle: '',
        headerStyle: {
          backgroundColor: 'red',
          height: 50,
        },
      }}>
      <Drawer.Screen
        name='dashboard'
        options={{
          drawerLabel: 'Dashboard',
          title: 'Dashboard',
        }}
      />
      <Drawer.Screen
        name='member'
        options={{
          drawerLabel: 'Members',
          title: 'Members',
        }}
      />
    </Drawer>
  );
};

export default DrawerNavigation;
