import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/views/components/screens/HomeScreen'
import LoginScreen from './src/views/components/screens/LoginScreen'
import RegistrationScreen from './src/views/components/screens/RegistrationScreen'
import ForgetPassword from './src/views/components/screens/ForgetPassword'
import ResetPassword from './src/views/components/screens/ResetPassword'
import OtpVerification from './src/views/components/screens/OtpVerification'
import Setting from './src/views/components/screens/Setting'
import ProfileSetting from './src/views/components/screens/ProfileSetting'
import Home from './src/views/components/screens/Home'
import Interview from './src/views/components/screens/Interview'
import Result from './src/views/components/screens/Result'
import CustomDropdown from './src/views/components/screens/CustomDropdown'
import ReadyToStart from './src/views/components/screens/ReadyToStart'
import Update from './src/views/components/screens/Update'
import WelcomeScreen from './src/views/components/screens/WelcomeScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Genderdropdown from './src/views/components/screens/Genderdropdown'


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name='Genderdropdown' component={Genderdropdown} />
        <Stack.Screen name='Update' component={Update} />
        <Stack.Screen name='ReadyToStart' component={ReadyToStart} />
        <Stack.Screen name='CustomDropdown' component={CustomDropdown} />
        <Stack.Screen name='Result' component={Result} />
        <Stack.Screen name='Interview' component={Interview} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ProfileSetting' component={ProfileSetting} />
        <Stack.Screen name='Setting' component={Setting} />
        <Stack.Screen name='OtpVerification' component={OtpVerification} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
        <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
        <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};
