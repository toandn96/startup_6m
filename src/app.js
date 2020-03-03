import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

import { NavigationContainer } from '@react-navigation/native';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { dark, light, mapping } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { WelcomeScreen } from "./screens/welcome.component";
import { AppContainer } from "navigations";

import { Provider } from "react-redux";

import { store } from "./redux/stores";

console.disableYellowBox = true;

enableScreens();


export const AuthContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          AsyncStorage.setItem('userToken', action.token);
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          AsyncStorage.removeItem('userToken');
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);


  const authContext = useMemo(
    () => ({
      signIn: async data => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  if (state.isLoading) {
    return <WelcomeScreen />;
  }

  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        mapping={mapping}
        theme={light}>
        <SafeAreaProvider>
          <AuthContext.Provider value={authContext}>
            <NavigationContainer>
              <AppContainer userToken={state.userToken} />
            </NavigationContainer>
          </AuthContext.Provider>
        </SafeAreaProvider>
      </ApplicationProvider>
    </Provider >
  );
}

export default App;


