import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet } from 'react-native';

import Button from '../Button';

const OtpVerification = ({navigation}) => {
  const [otp1, setOTP1] = useState('');
  const [otp2, setOTP2] = useState('');
  const [otp3, setOTP3] = useState('');
  const [otp4, setOTP4] = useState('');
  

  const handleVerifyOTP = () => {
    // Concatenate OTP digits for verification
    const otp = otp1 + otp2 + otp3 + otp4;
    // Add your OTP verification logic here
    console.log('Verifying OTP:', otp);
    
    // Navigate to the home screen after OTP verification
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>OTP Sent</Text>
        <Text style={{ width:266,height:42,fontFamily: 'Poppins', color: 'white', fontSize: 16, fontWeight: '400', marginBottom: 20 }}>A 4 digit code has been sent to
          +91 9429342870 </Text>
        <View style={styles.otpContainer}>
          <TextInput
            style={styles.input}
            placeholder="0"
            keyboardType="numeric"
            maxLength={1}
            value={otp1}
            onChangeText={setOTP1}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="0"
            keyboardType="numeric"
            maxLength={1}
            value={otp2}
            onChangeText={setOTP2}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="0"
            keyboardType="numeric"
            maxLength={1}
            value={otp3}
            onChangeText={setOTP3}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="0"
            keyboardType="numeric"
            maxLength={1}
            value={otp4}
            onChangeText={setOTP4}
            secureTextEntry
          />

        </View>
        <Text style={{fontFamily:'Poppins',fontWeight:'400', width:178, height:15, color: 'white',marginLeft:1 }}>Re-send code in 00:23sec</Text>
        <View style={styles.buttonContainer}>
          <Button title="Verify" onPress={handleVerifyOTP} />
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B2236',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 41,
    fontWeight: 'bold',
  
    color: '#CD5B97',
    fontFamily: 'Poppins',
    lineHeight: 66,
    width: 277,
    height: 66,
  },
  otpContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    width: 50,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    marginTop: 20,
  },
});

export default OtpVerification;