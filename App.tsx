import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import PlayerScreen from './screens/PlayerScreen';
import DownloadListScreen from './screens/DownloadListScreen';
import { NativeModules } from 'react-native';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Player" component={PlayerScreen} />
        <Stack.Screen name="DownloadListScreen" component={DownloadListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;