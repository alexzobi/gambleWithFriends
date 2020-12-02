import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';import { PersistGate } from 'redux-persist/integration/react';

import { persistor } from './src/store/store';



import UIKit from './src/screens/UIkit';
import Wallet from './src/screens/Wallet';
import Bets from './src/screens/Bets';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PersistGate
      loading={null}
      persistor={persistor}
    >
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Wallet" component={Wallet} />
          <Tab.Screen name="Bets" component={Bets} />
          <Tab.Screen name="Settings" component={Settings} />
          <Tab.Screen name="UI Kit" component={UIKit} />
        </Tab.Navigator>
      </NavigationContainer>
    </PersistGate>
  );
};
