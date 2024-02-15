import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../../conts/colors'

export default function Button({ title, onPress = () => { } }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                height: 55,
                width: '100%',
                backgroundColor: COLORS.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40,
                width:184,
                height:39,
                marginLeft:16,
                
               
            }}>

            <Text style={{color:COLORS.black, fontWeight:'bold',fontSize:14}}>{title}</Text>
        </TouchableOpacity>
    )
}