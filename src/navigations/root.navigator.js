import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app.routes';
import { OrderDetailScreen } from '../screens/orders';
import BottomTabNavigatorV2 from './tab.navigator';
const Stack = createStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator initialRouteName={AppRoute.ROOT}>
    <Stack.Screen name={AppRoute.ROOT}
      component={BottomTabNavigatorV2}
      options={{
        header: () => null,
      }} />
    <Stack.Screen name={AppRoute.ORDER_DETAIL_SCREEN}
      component={OrderDetailScreen}
      options={{
        header: () => null,
      }} />
  </Stack.Navigator>
)
export default RootNavigator;