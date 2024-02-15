import { View, Text, Image, TouchableOpacity, onPress, ScrollView } from 'react-native'
import COLORS from '../../../conts/colors'
import React from 'react'
import Button from '../Button'

import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const logoimg = require('../../../../assets/ProfileImage.png')

export default function Home({navigation}) {
  return (

    <ScrollView style={{ backgroundColor: COLORS.background, flex: 1 }}>

      <View style={{ flexDirection: 'row' }}>
        <Image source={logoimg} style={{ height: 44, width: 44, marginTop: 68.69, marginLeft: 40.69 }} />
        <Text style={{ width: 180, height: 68, marginLeft: 30, marginTop: 73, fontFamily: 'poppins', color: "#CD5B97", fontSize: 22, fontWeight: '600' }}>Hello, Adam</Text>
        <Icon name='share-variant-outline' style={{ color: COLORS.white, marginTop: 78, marginLeft: 60, fontSize: 22 }} />
      </View>
      <View style={{ flexWrap: 'true' }}>
        <Text style={{ fontFamily: 'poppins', fontSize: 14, fontWeight: 700, color: 'white', width: 286, height: 33, marginLeft: 38, marginTop: 1 }}>We’re excited to help you ace your dream job interview in best way!</Text>
      </View>
      <View style={{ backgroundColor: 'rgba(87, 94, 114, 0.5)', flexDirection: 'row', width: 360, height: 130, borderRadius: 13, marginTop: 50, marginLeft: 38 }}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ marginLeft: 30, fontFamily: 'poppins', fontSize: 12, fontWeight: '400', color: 'white', width: 154, height: 34, marginTop: 39 }}>Let’s get started with your
            mock video interview</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#27263C',
              marginLeft: 30,
              padding: 7,
              borderRadius: 20,
              alignItems: 'center',
              marginTop: 10,
            }}
            onPress={() => {
              // Handle button press
              console.log('Button pressed!');
            }}>
            <Text style={{ color: '#fff', fontSize: 16 }} onPress={()=> navigation.navigate('Result')}>Start now</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../../../../assets/image-2.png')} style={{ width: 215, height: 130, paddingTop: 24 }} />

      </View>

      <View>
        <Text style={{ paddingLeft: 50, paddingTop: 40, color: '#fff', fontWeight: 700 }}>Revisit Past sessions</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'rgba(87, 94, 114, 0.5)', padding: 15, width: 360, height: 130, borderRadius: 13, marginTop: 21, marginLeft: 38 }}>
        <Image source={require('../../../../assets/image-7.png')} />
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ flexDirection: 'column', fontFamily: 'poppins', fontSize: 8, fontWeight: '400', color: '#fff', width: 76, height: 19, marginLeft: 12, marginTop: 4 }}>Kathryn Cooper
            HR Manager</Text>
          <Image source={require('../../../../assets/rectangle.png')} style={{ color: COLORS.white, marginTop: 8, marginLeft: 10, fontSize: 22 }} />

          <Text style={{ alignItems: 'center', fontFamily: 'poppins', fontSize: 8, fontWeight: '400', color: '#fff', width: 141, height: 19, marginLeft: 12, marginTop: 15 }}>Visual Communication Designer
            Design & media</Text>

        </View>
        <View style={{ padding: 0 }}>
          <TouchableOpacity>
            <Image source={require('../../../../assets/timer.png')} style={{ color: COLORS.white, marginTop: 8, marginLeft: 10, fontSize: 22 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={{ paddingLeft: 50, paddingTop: 40, color: '#fff', fontWeight: 700 }}>Score board</Text>
      </View>
      <View style={{ backgroundColor: 'rgba(87, 94, 114, 0.5)', padding: 15, width: 360, height: 130, borderRadius: 13, marginTop: 21, marginLeft: 38, flexDirection: 'row' }}>
        <Image source={require('../../../../assets/ProfileImage.png')} style={{ width: 90, height: 90 }} />
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontFamily: 'poppins', fontSize: 8, fontWeight: '400', color: '#fff', width: 76, height: 19, marginLeft: 12, marginTop: 4 }}>Visual Designer Design & Media</Text>
          <Text style={{ fontFamily: 'poppins', fontSize: 8, fontWeight: '400', color: '#fff', width: 76, height: 19, marginLeft: 15, marginTop: 45}}>
            00:30
          </Text>
          <Text style={{ fontFamily: 'poppins', fontSize: 8, fontWeight: '400', color: '#fff', width: 76, height: 19, marginLeft: 15 }}>
          01-08-2023
          </Text>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Icon name='dots-horizontal' style={{ color: COLORS.white, marginTop: 8, marginLeft: 130, fontSize: 22 }} />
          <View style={{ flexDirection: 'row' }}>
            <Icon name='star-outline' style={{ color: COLORS.white, marginTop: 8, marginLeft: 10, fontSize: 22 }} />
            <Icon name='star-outline' style={{ color: COLORS.white, marginTop: 8, marginLeft: 10, fontSize: 22 }} />
            <Icon name='star-outline' style={{ color: COLORS.white, marginTop: 8, marginLeft: 10, fontSize: 22 }} />
            <Icon name='star-outline' style={{ color: COLORS.white, marginTop: 8, marginLeft: 10, fontSize: 22 }} />
            <Icon name='star-outline' style={{ color: COLORS.white, marginTop: 8, marginLeft: 10, fontSize: 22 }} />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>

        </View>

      </View>
      <View>
        <Text style={{ paddingLeft: 50, paddingTop: 40, color: '#fff', fontWeight: 700 }}>Explore Insights from Recorded Interviews</Text>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.background,
        height: 60,
        borderTopWidth: 0,
        // borderTopColor: '#ccc',
      }}>
        <TouchableOpacity style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Icon name="home" size={50} color="#333" />

        </TouchableOpacity>
        <TouchableOpacity style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Icon name="account" size={50} color="#333" />

        </TouchableOpacity>
        <TouchableOpacity style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Icon name="cog" size={50} color="#333" />

        </TouchableOpacity>
        <TouchableOpacity style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Icon name="lifebuoy" size={50} color="#333" />

        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}


