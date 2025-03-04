import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./src/components/Auth/LoginScreen"
import AuthGoog from './src/components/Auth/AuthGoog';
import MainScreen from './src/components/Main/MainScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="  LoginScreen" component={  LoginScreen} />
        <Stack.Screen name="AuthGoog" component={AuthGoog} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
