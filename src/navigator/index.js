import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../screens/splashScreen';
import SigninScreen from '../screens/signinScreen';
import ForgotScreen from '../screens/forgotScreen';
import ResetScreen from '../screens/resetScreen';
import TutorialScreen1 from '../screens/tutorialScreen/tutorialScreen1';
import TutorialScreen2 from '../screens/tutorialScreen/tutorialScreen2';
//import Home from '../screens/home';
import AddPhone from '../screens/addPhone';
import Verify from '../screens/verify';
import BottomTabNavigator from './bottomtab';


const RootNavigator = () => {
    const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          animation: 'slide_from_bottom',
        }}>

        <Stack.Screen
          component={SplashScreen}
          name="SplashScreen"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={SigninScreen}
          //name={ScreenNames.Signin}
          name="SigninScreen"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={ForgotScreen}
          name="ForgotScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ResetScreen}
          name="ResetScreen"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={TutorialScreen1}
          name="TutorialScreen1"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={TutorialScreen2}
          name="TutorialScreen2"
          options={{headerShown: false}}
        />
         {/* <Stack.Screen
          component={Home}
          name="Home"
          options={{headerShown: false}}
        /> */}
         <Stack.Screen
          component={AddPhone}
          name="AddPhone"
          options={{headerShown: false}}
        />
          <Stack.Screen
          component={Verify}
          name="Verify"
          options={{headerShown: false}}
        />
        
        {/* <Stack.Screen
          component={Home}
          name={ScreenNames.Home}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          component={BottomTabNavigator}
          name="BottomTabNavigator"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;