import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app.routes';
import { ProductsListScreen, ProductDetailScreen } from '../screens';

const Stack = createStackNavigator();

export const ProductNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.PRODUCT_SCREEN} component={ProductsListScreen} />
    <Stack.Screen name={AppRoute.PRODUCT_DETAIL_SCREEN} component={ProductDetailScreen} />
  </Stack.Navigator>
);