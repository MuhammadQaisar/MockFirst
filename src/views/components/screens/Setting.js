import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../../../conts/colors'
import Button from '../Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon  from 'react-native-vector-icons/MaterialIcons'


export default function Setting({navigation}) {
  return (

    <SafeAreaView style={{backgroundColor:COLORS.background, flex:1}}>
     <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Icon name='arrow-back-ios-new' style={{ marginTop: 83, marginLeft: 37, color: 'white', fontSize: 22 }} />
                    </View>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 'bold', color: 'white', width: 56, height: 40, marginTop: 84, marginLeft: 6 }}>Back</Text>
                    <View>
                        <Icon name='share' style={{ marginTop: 83, marginLeft: 250, color: 'white', fontSize: 25 }} />
                    </View>
                </View>
                <View>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 41, fontWeight: '700', color: '#CD5B97', marginTop: 18, marginLeft: 60,width:180,height:68 }}>Settings</Text> 
                </View>
               <View style={{alignItems:'center'}}>
               <View>
                  <TouchableOpacity>
                   <View style={{flexDirection:'row'}}>
                   <Text style={{fontFamily:'Poppins',fontSize:14,lineHeight:21,color:'white', width:147,height:33,marginLeft: 52,marginTop:22}}>Profile Setting</Text>
                    <Icon name='arrow-forward-ios' style={{marginTop:22, marginLeft:120,color: 'white', fontSize: 22 }} />
                   </View>
                   <View  style={{ backgroundColor: '#fff', width: 308, height: 2, marginLeft: 32, marginTop: 4, borderRadius: 7 }}></View>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                   <View style={{flexDirection:'row'}}>
                   <Text style={{fontFamily:'Poppins',fontSize:14,lineHeight:21,color:'white', width:147,height:33,marginLeft: 52,marginTop:22}}>Preferences</Text>
                    <Icon name='arrow-forward-ios' style={{marginTop:22, marginLeft:120,color: 'white', fontSize: 22 }} />
                   </View>
                   <View  style={{ backgroundColor: '#fff', width: 308, height: 2, marginLeft: 32, marginTop: 4, borderRadius: 7 }}></View>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                   <View style={{flexDirection:'row'}}>
                   <Text style={{fontFamily:'Poppins',fontSize:14,lineHeight:21,color:'white', width:147,height:33,marginLeft: 52,marginTop:22}}>Privacy & Security</Text>
                    <Icon name='arrow-forward-ios' style={{marginTop:22, marginLeft:120,color: 'white', fontSize: 22 }} />
                   </View>
                   <View  style={{ backgroundColor: '#fff', width: 308, height: 2, marginLeft: 32, marginTop: 4, borderRadius: 7 }}></View>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                   <View style={{flexDirection:'row'}}>
                   <Text style={{fontFamily:'Poppins',fontSize:14,lineHeight:21,color:'white', width:147,height:33,marginLeft: 52,marginTop:22}}>Help & Support</Text>
                    <Icon name='arrow-forward-ios' style={{marginTop:22, marginLeft:120,color: 'white', fontSize: 22 }} />
                   </View>
                   <View  style={{ backgroundColor: '#fff', width: 308, height: 2, marginLeft: 32, marginTop: 4, borderRadius: 7 }}></View>
                  </TouchableOpacity>
                </View>
               </View>
                <View style={{alignItems:'center', marginTop:50}}>
                <Button title="Logout"  onPress={()=> navigation.navigate('RegistrationScreen')}/>
                </View>
    </SafeAreaView>

  )
}