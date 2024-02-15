import { View, Text } from 'react-native'
import { SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, navigate } from 'react-native';
import COLORS from '../../../conts/colors';

import React from 'react'
import Input from '../Input'
import Button from '../Button'


export default function LoginScreen({ navigation }) {
  // ...

  return (
    <SafeAreaView style={{backgroundColor:COLORS.background,flex:1,paddingHorizontal:15}}>

<Text style={{ color: COLORS.login, fontFamily:'Poppins', fontSize: 41, fontWeight:'bold', width:277, height:61,marginTop:200,marginLeft:40 }}>Login</Text>
        
      
      <Input placeholder="Enter your E-mail address" placeholderTextColor="#fff" iconName="alternate-email"/>
      <Input secureTextEntry placeholder="Enter your password" placeholderTextColor="#fff" iconName="lock-outline" />
      <Text onPress={()=> navigation.navigate('ForgetPassword')} style={{alignSelf:'flex-end', color:COLORS.white, marginVertical:20}}>Forget password?</Text>
      <View style={{alignItems:'center'}}>
      <Button title="Login" onPress={()=> navigation.navigate('Home')}/>
      </View>
      <Text onPress={()=> navigation.navigate('RegistrationScreen')} style={{alignSelf:'center', color:COLORS.white, marginVertical:20}}>Don't have an account ? Register </Text>
    </SafeAreaView>
      
  )
}