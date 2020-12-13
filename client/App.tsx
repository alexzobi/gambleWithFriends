import * as React from 'react';
import { Text, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './src/store/store';
import { AppState } from './src/store/types';



import UIKit from './src/screens/UIkit';
import Wallet from './src/screens/Wallet';
import Bets from './src/screens/Bets';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import Awards from './src/screens/Awards';
import Login from './src/screens/Auth/Login';

const Tab = createBottomTabNavigator();

export default function App() {
  const loggedIn = store.getState().auth.username;

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName={loggedIn ? "Home" : "Login"}
            screenOptions={{ tabBarVisible: false }}
          >
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Wallet" component={Wallet} />
            <Tab.Screen name="Bets" component={Bets} />
            <Tab.Screen name="Awards" component={Awards} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="UI Kit" component={UIKit} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
