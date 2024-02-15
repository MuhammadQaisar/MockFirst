import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import COLORS from '../../conts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Input = ({ label,
    iconName,
    error,
    password,
    leftIconName,
    onFocus = () => { },
    ...props }) => {
    
    return (
        <View style={{ marginBottom: 20 }}>
            
            <View style={styles.inputContainer}>
                <Icon name={leftIconName} style={{fontSize:22, flexDirection:'row-reverse', color:COLORS.white, marginLeft:10}}/>
                <Icon name={iconName} style={{fontSize:22, color:COLORS.white,marginLeft:0, paddingHorizontal:12}}/>
                <TextInput 
                    style={{color:COLORS.darkBlue, flex:1}} {...props}
                />
                  
               
            </View>
            {error && <Text style={{color:COLORS.red, fontSize:12, marginTop:7}}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
   
    inputContainer: {
        height: 55,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderBottomColor: COLORS.white,
        borderLeftWidth:0,
        borderTopWidth:0,
        borderRightWidth:0,
        alignItems: 'center',
    
    },
});

export default Input;
