import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import Dashboard from '../Pages/Dashboard';
import { Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 10 : 0,
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Screen
        name="Positivos"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="checkmark-outline" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Negativos"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="close-outline" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
