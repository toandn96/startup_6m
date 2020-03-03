import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeNavigator } from './home.navigator';
import { SettingNavigator } from './setting.navigator';
import { OrderNavigator } from './order.navigator';
import { ProductNavigator } from './product.navigator';

import { AppRoute } from './app.routes';

import { HomeTabBar } from '../components';

import { SettingIcon, HomeIcon, BriefcaseIcon, GridIcon } from '../assets';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigatorV2 = () => (
  <BottomTab.Navigator
    tabBar={props => <HomeTabBar {...props} />}>
    <BottomTab.Screen
      name={AppRoute.HOME}
      component={HomeNavigator}
      options={{ title: 'HOME', tabBarIcon: HomeIcon }}
    />
    <BottomTab.Screen
      name={AppRoute.ORDER}
      component={OrderNavigator}
      options={{ title: 'ORDER', tabBarIcon: BriefcaseIcon }}
    />
    <BottomTab.Screen
      name={AppRoute.PRODUCT}
      component={ProductNavigator}
      options={{ title: 'PRODUCT', tabBarIcon: GridIcon }}
    />
    <BottomTab.Screen
      name={AppRoute.SETTING}
      component={SettingNavigator}
      options={{ title: 'SETTING', tabBarIcon: SettingIcon }}
    />
  </BottomTab.Navigator>
);

const BottomTabNavigator = () => (
  <BottomTab.Navigator
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <BottomTab.Screen name={AppRoute.PROFILE}
      component={ProfileNavigator}
      options={{
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} />
    <BottomTab.Screen name={AppRoute.TODO}
      component={TodoNavigator}
      options={{
        tabBarLabel: 'TODO',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} />
    <BottomTab.Screen name={AppRoute.ABOUT}
      component={AboutNavigator}
      options={{
        tabBarLabel: 'TODO',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} />
  </BottomTab.Navigator>
);

export default BottomTabNavigatorV2;