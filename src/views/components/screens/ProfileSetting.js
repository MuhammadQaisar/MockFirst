import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, navigate } from 'react-native';
import COLORS from '../../../conts/colors';
import Input from '../Input';
import Button from '../Button';
import { Icon } from 'react-native-vector-icons/MaterialIcons';



export default function ProfileSetting({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.background, flex: 1 }}>
      <ScrollView contentContainerStyle={{
        paddingTop: 50,
        paddingHorizontal: 20,
      }}>
        <Text style={{ color:'#CD5B97', fontSize: 40, fontWeight: 'bold', width:'277px', height:'112px',  marginTop:80, margin:34}}> Profile Settings</Text>
        

        <View style={{ marginVertical: 20}}>
          <Input placeholder="Name" placeholderTextColor="#fff"  label="Email"  />
          
          <Input placeholder="Age" placeholderTextColor="#fff" label="Full name"  />
          <Input placeholder="Gender" placeholderTextColor="#fff" iconName="keyboard-arrow-down" label="Email"  />
          <Input secureTextEntry placeholder="Country" placeholderTextColor="#fff" iconName="keyboard-arrow-down" label="Password"  />
          <Input secureTextEntry placeholder="Field" placeholderTextColor="#fff" iconName="keyboard-arrow-down" label="Password"  />

          <Button title="Continue" onPress={null}/>
          
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}
