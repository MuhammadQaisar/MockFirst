import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import COLORS from '../../../conts/colors'
import Input from '../Input'
import Button from '../Button'

export default function ResetPassword() {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.background, flex: 1, }}>
      <View style={{ paddingLeft: 45, padding: 162, paddingHorizontal: 15 }}>

        <Text style={{ color: '#CD5B97', fontSize: 41, fontFamily: 'poppins', width: 277, fontWeight: 'bold' }}>Reset Password</Text>

        <View style={{ paddingTop: 22 }}>
          <Input secureTextEntry placeholder="New password" placeholderTextColor="#fff" iconName="lock-outline" label="Password" />
          <Input secureTextEntry placeholder="Confirm New password" placeholderTextColor="#fff" iconName="lock-outline" label="Password" />
        </View>
        <View style={{ padding: 20,color:'white' }}>
        <FlatList
          data={[
            { key: 'A mixture of letters and numbers' },
            { key: 'A mixture of both uppercase and' },
            { key: 'lowercase letters' },
            { key: 'Inclusion of at least one special' },
            { key: 'character, e.g., ! @ # ? ]' },
            
          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 14, color:'white' }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
      </View>
        <View style={{ paddingTop: 22 }}>
          <Button title="Submit" />
        </View>
      </View>
    </SafeAreaView>
  )
}