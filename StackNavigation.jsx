// src/StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './components/MainPage';
import Profile from './components/Profile'; 
import ComingSoonScreen from './components/PagesYetCome'; 
import ForgotPassword from './components/ForgotPassword';
import LoginPage from './components/LoginPage';
import TabNavigator from './TabNavigation';
import Splash from './components/Splash';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginPage} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="ForgotPassword" 
        component={ForgotPassword} 
        options={{ title: 'Reset Your Password', headerBackTitleVisible: false }} 
      />
      <Stack.Screen 
        name="Home" 
        component={MainPage} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Profile" 
        component={Profile} 
      />
      <Stack.Screen 
        name="ComingSoon" 
        component={ComingSoonScreen} 
        options={{ title: 'Coming Soon',headerShown: false }}  
      />
      <Stack.Screen 
        name="Splash" 
        component={Splash} 
        options={{ title: 'Splash',headerShown: false }}  
      />

<Stack.Screen 
        name="HomeTabs" 
        component={TabNavigator} 
        options={{ headerShown: false }} // No header for the tab navigator
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
