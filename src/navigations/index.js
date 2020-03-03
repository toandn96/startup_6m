import React from "react";

import AuthNavigator from './auth.navigator';
import RootNavigator from "./root.navigator";

import { AppRoute } from "./app.routes";

const AppContainer = ({ userToken }) => {
  if (userToken) return <RootNavigator />
  return <AuthNavigator />
}

export {
  AppContainer,
  AppRoute
};