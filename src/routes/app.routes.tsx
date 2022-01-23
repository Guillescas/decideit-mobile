import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../Pages/Dashboard';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Positivos" component={Dashboard} />
      <Screen name="Negativos" component={Dashboard} />
    </Navigator>
  );
}
