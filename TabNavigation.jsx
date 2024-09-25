import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import MainPage from './components/MainPage';
import Profile from './components/Profile';
import ComingSoonScreen from './components/PagesYetCome';
import Alerts from './components/Alerts';
import Explore from './components/Explore';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 80, 
          paddingBottom: 10, 
          paddingTop: 10,
          backgroundColor: 'white',
        },
        tabBarLabelStyle: {
          fontSize: 14, 
          fontWeight: 'bold', 
          marginBottom: 5,
          color: 'black'
        },
        tabBarIcon: ({ focused }) => {
          let iconSource;
          let focusedColor = 'red';  // Set your custom focused color here
          let defaultColor = 'gray'; // Set the default color for unfocused tabs here

          switch (route.name) {
            case 'Home':
              iconSource = require('./assets/images/home.jpg');
              break;
            case 'Explore':
              iconSource = require('./assets/images/explore.jpg');
              break;
            case 'Alerts':
              iconSource = require('./assets/images/alerts.jpg');
              break;
            case 'About':
              iconSource = require('./assets/images/about.jpg');
              break;
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? focusedColor : defaultColor, // Focused color will now be 'red'
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={MainPage} 
        options={{ 
          headerShown: false,
        }} 
      />

      <Tab.Screen 
        name="Explore" 
        component={ComingSoonScreen} 
        options={{ 
          headerShown: false,
          title: 'Explore'
        }} 
      />

      <Tab.Screen 
        name="Alerts" 
        component={Explore} 
        options={{ 
          headerShown: false,
          title: 'Alerts'
        }} 
      />

      <Tab.Screen 
        name="About" 
        component={Profile} 
        options={{ 
          headerShown: false,
          title: 'About'
        }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
