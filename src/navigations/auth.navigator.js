import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app.routes';
import { SignInScreen, SignUpScreen, ResetPasswordScreen } from '../screens/auth';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName={AppRoute.SIGN_IN} headerMode="none">
    <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen} />
    <Stack.Screen name={AppRoute.SIGN_UP} component={SignUpScreen} />
    <Stack.Screen name={AppRoute.RESET_PASSWORD} component={ResetPasswordScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;