import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app.routes';
import { OrdersScreen } from '../screens/orders';

const Stack = createStackNavigator();

export const OrderNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.ORDER_SCREEN} component={OrdersScreen} />
  </Stack.Navigator>
);