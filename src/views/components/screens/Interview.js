import { View, Text, ScrollView, Image, onPress, StyleSheet } from 'react-native'
import CustomDropdown from './CustomDropdown';
import React, { useState, useEffect } from 'react'
import COLORS from '../../../conts/colors'
import PillButton from './PillButton';
import Dropdown from './Dropdown';
import Button from '../Button';
import RNPickerSelect from 'react-native-picker-select';


import Icon from 'react-native-vector-icons/MaterialIcons';

import { SafeAreaView } from 'react-native-safe-area-context'
export default function Interview() {
    const items = [
        { label: 'English', value: 'English' },
        { label: 'Urdu', value: 'option2' },
        { label: 'Hindi', value: 'option3' },
    ];



    const [selectedValue, setSelectedValue] = useState(items[0].value);

    useEffect(() => {
        // Do something with the selected value, for example, send it to an API or update the parent component state.
        console.log('Selected Value:', selectedValue);
    }, [selectedValue]);

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.background, flex: 1 }}>
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
                <View>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: '700', color: 'white', marginTop: 18, marginLeft: 60 }}>Let’s get to know you better!</Text>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: '700', color: 'white', marginTop: 18, marginLeft: 60 }}>Please select interviewer for the AI Generated avatar</Text>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{ backgroundColor: '#fff', marginHorizontal:10, borderRadius: 8, }}>
                        <Image source={require('../../../../assets/image1.png')} />
                    </View>

                    <View style={{ backgroundColor: '#fff',borderRadius:8 }}>
                        <Image source={require('../../../../assets/image2.png')} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>

                    <Text style={{ fontFamily: 'Poppins', fontSize: 14, fontWeight: 400, width: 286, height: 17, marginLeft: 41, marginTop: 30, color: 'white' }}>Choose area you’d like to evaluate!</Text>
                    <Text style={{ fontFamily: 'Poppins', fontSize: 14, fontWeight: 400, width: 286, height: 17, marginLeft: 41, marginTop: 30, color: 'white' }} >see all</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 12,
                    flexDirection: 'row',
                    marginTop: 20,
                    marginLeft: 40
                }}>
                    <PillButton title="Media" />
                    <PillButton title="Arts" />
                    <PillButton title="Finance" />
                    <PillButton title="Accounting" />
                </View>
                <View >
                    <Text style={{ fontFamily: 'Poppins', fontSize: 14, fontWeight: '700', marginLeft: 30, marginTop: 30, color: 'white' }}>Please Select your Language of
                        communication.</Text>
                        <CustomDropdown/>
                        <CustomDropdown/>
                        <CustomDropdown/>
                </View>
              
                <View style={{marginTop:30,marginLeft:30}}>
                <Button title="Submit" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
