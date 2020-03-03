import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app.routes';
import { SettingScreen } from '../screens';

const Stack = createStackNavigator();

export const SettingNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.SETTING_SCREEN} component={SettingScreen} />
  </Stack.Navigator>
);