import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../../screens/profileScreen';
import HomeScreen from '../../screens/homeScreen';
import Favourites from '../../screens/favourites';
import Menu  from '../../screens/menu';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{headerShown: false, tabBarLabel:'Home'}}
      />
      <Tab.Screen
        component={Profile}
        name="Profile"
        options={{headerShown: false}}
      />
        <Tab.Screen
        component={Favourites}
        name="Favourites"
        options={{headerShown: false}}
      />
        <Tab.Screen
        component={Menu}
        name="Menu"
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;