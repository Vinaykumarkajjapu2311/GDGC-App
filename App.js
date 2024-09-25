// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigation';
import StackNavigator from './StackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      {/* You can switch between StackNavigator and TabNavigator here based on your flow */}
      <StackNavigator />
      {/* If you want Tab navigation at some point, you can use it like below */}
      {/* <TabNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
