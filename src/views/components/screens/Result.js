import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import * as Progress from 'react-native-progress';


import React from 'react'
import Button from '../Button'

import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../../../conts/colors'
export default function Result({ navigation}) {
  return (
    <View style={{ backgroundColor: COLORS.background, flex: 1 }}>
      <SafeAreaView>
        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Icon name='arrow-back-ios-new' style={{ marginTop: 83, marginLeft: 37, color: 'white', fontSize: 22 }} />
            </View>
            <Text style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 'bold', color: 'white', width: 56, height: 40, marginTop: 84, marginLeft: 6 }}>Back</Text>
            <View>
              <Icon name='share' style={{ marginTop: 83, marginLeft: 250, color: 'white', fontSize: 25 }} />
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: '700', color: '#CD5B97', marginTop: 18 }}>GREAT JOB!</Text>
            <Text style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: '700', color: 'white', marginTop: 18 }}>Your Effort is Greatly Appreciated</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Icon name='star-outline' style={{ color: COLORS.white, marginTop: 8, marginLeft: 10, fontSize: 35 }} />
            <Icon name='star-outline' style={{ color: COLORS.white, marginTop: 8, marginLeft: 10, fontSize: 35 }} />
            <Icon name='star-outline' style={{ color: COLORS.white, marginTop: 8, marginLeft: 10, fontSize: 35 }} />
            <Icon name='star-outline' style={{ color: COLORS.white, marginTop: 8, marginLeft: 10, fontSize: 35 }} />
            <Icon name='star-outline' style={{ color: COLORS.white, marginTop: 8, marginLeft: 10, fontSize: 35 }} />
          </View>

          <View style={{ alignItems: 'center' }}>
            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.25)", width: 308, height: 70, marginLeft: 32, marginTop: 34, borderRadius: 7 }}>
              <Text style={{ marginTop: 12, marginLeft: 30, fontFamily: 'Poppins', fontSize: 14, lineHeight: 30, color:'white'}}>Basic Skills</Text>
              <View style={{paddingHorizontal:12,color:COLORS.background,marginLeft:17}}><Progress.Bar progress={0.7} width={250} />
              </View>
            </View>
            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.25)", width: 308, height: 70, marginLeft: 32, marginTop: 34, borderRadius: 7 }}>
              <Text style={{ marginTop: 12, marginLeft: 30, fontFamily: 'Poppins', fontSize: 14, lineHeight: 30,color:'white' }}>Verbal Behaviour</Text>
              <View style={{paddingHorizontal:12,marginLeft:17}}><Progress.Bar progress={0.7} width={250} />
              </View>
            </View>
            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.25)", width: 308, height: 70, marginLeft: 32, marginTop: 34, borderRadius: 7 }}>
              <Text style={{ marginTop: 12, marginLeft: 30, fontFamily: 'Poppins', fontSize: 14, lineHeight: 30, color:'white' }}>Confidence</Text>
              <View style={{paddingHorizontal:12,marginLeft:17}}><Progress.Bar progress={0.7} width={250} />
              </View>
            </View>
            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.25)", width: 308, height: 70, marginLeft: 32, marginTop: 34, borderRadius: 7 }}>
              <Text style={{ marginTop: 12, marginLeft: 30, fontFamily: 'Poppins', fontSize: 14, lineHeight: 30,color:'white' }}>Eye Contact</Text>
              <View style={{paddingHorizontal:12,marginLeft:17}}><Progress.Bar progress={0.7} width={250} />
              </View>
            </View>
          </View>

        </ScrollView>
        <View style={{ marginTop: 62, alignItems: 'center' }}>
          <Button title="Try again" onPress={()=> navigation.navigate('Home')}/>
        </View>
      </SafeAreaView>
    </View>
  )
}