import React from 'react';
import { AppRoute } from './app.routes';
import { HomeScreen, HomeDetailsScreen } from '../screens';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const HomeNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.HOME_SCREEN} component={HomeScreen} />
    <Stack.Screen name={AppRoute.HOME_DETAIL}
      component={HomeDetailsScreen}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }} />
  </Stack.Navigator>
);