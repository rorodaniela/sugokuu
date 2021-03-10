import React from 'react';
import {Provider} from 'react-redux'
import Board from './src/screen/Board';
import Home from './src/screen/Home';
import Finish from './src/screen/Finish';
import store from './src/store/index'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                  <Stack.Screen name="Game" component={Board} options={{ title: '' }}/>
                  <Stack.Screen name="Finish" component={Finish} options={{ headerShown: false }}/>
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}