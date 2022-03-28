import 'react-native-gesture-handler';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './components/navigator/tabs.js';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
