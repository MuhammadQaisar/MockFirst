import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, navigate } from 'react-native';
import COLORS from '../../../conts/colors';
import Input from '../Input';
import Button from '../Button';


export default function RegistrationScreen({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.background, flex: 1 }}>
      <ScrollView contentContainerStyle={{
        paddingTop: 50,
        paddingHorizontal: 20,
      }}>
        <Text style={{ color: '#CD5B97', fontSize: 40, fontWeight: 'bold', width: '277px', height: '112px', marginTop: 80, margin: 34 }}>Create Your account</Text>


        <View style={{ marginVertical: 20 }}>
          <Input placeholder="Enter your E-mail address" placeholderTextColor="#fff" iconName="alternate-email" label="Email" />
          <Input placeholder="Enter your Full name" placeholderTextColor="#fff" iconName="account-circle" label="Full name" />
          <Input placeholder="Enter your phone number" placeholderTextColor="#fff" iconName="phone" label="Email" />
          <Input secureTextEntry placeholder="Enter your password" placeholderTextColor="#fff" iconName="lock-outline" label="Password" />
        </View>
        <View style={{alignItems:'center'}}>
          <Button title="Register" onPress={()=> navigation.navigate('Home')} />

          <Text onPress={() => navigation.navigate('LoginScreen')} style={{ alignSelf: 'center', color: COLORS.white, marginVertical: 20 }}>Already have an account ? Login </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
