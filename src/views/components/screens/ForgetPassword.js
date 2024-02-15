import COLORS from '../../../conts/colors'
import Input from '../Input'
import Button from '../Button'
import { View, Text, SafeAreaView,navigate } from 'react-native'
import React from 'react'

export default function ForgetPassword({ navigation}) {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.background, flex: 1, }}>
      <View style={{ paddingLeft: 45, padding: 162, paddingHorizontal: 15 }}>

        <Text style={{ color: '#CD5B97', fontSize: 41, fontFamily: 'poppins', width: 277,fontWeight:'bold'}}>Forgot Password</Text>
        <Text style={{ color: '#fff', width: 286, height: 42,marginLeft:8,marginTop:34}}>Don’t worry it happens. Please enter the
          address associated with your account.</Text>
        <View style={{marginTop:22}}>
          <Input placeholder="E-mail" placeholderTextColor="#fff" iconName="alternate-email" label="Email" />
        </View>
        <View style={{alignItems:'center', marginTop: 45}}>
        <Button title="Send OTP" onPress={()=> navigation.navigate('OtpVerification')} />
        </View>
      </View>
    </SafeAreaView>
  )
}