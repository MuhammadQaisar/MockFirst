import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import COLORS from '../../../conts/colors';
import { SafeAreaView } from 'react-native-safe-area-context';


const Genderdropdown = ({ selectedGender, setSelectedGender }) => {
    const genders = ['Male', 'Female', 'Other'];

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
       <SafeAreaView style={styles.container}>
         <View>
            <TouchableOpacity style={styles.dropdownSelector} onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
                <Text style={styles.selectedGender}>{selectedGender}</Text>
                <Image source={isDropdownOpen ? require('../../../../assets/up.png') : require('../../../../assets/down.png')} style={styles.icon} />
            </TouchableOpacity>
            {isDropdownOpen && (
                <View style={styles.dropdownArea}>
                    <FlatList
                        data={genders}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.genderItem} onPress={() => {
                                setSelectedGender(item);
                                setIsDropdownOpen(false);
                            }}>
                                <Text style={styles.genderText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )}
        </View>
       </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
    
        backgroundColor:'#1B2236',
        flex: 1,

    },
    dropdownSelector: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    selectedGender: {
        fontSize: 16,
    },
    icon: {
        width: 20,
        height: 20,
    },
    dropdownArea: {
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        maxHeight: 150,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        zIndex: 1,
    },
    genderItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    genderText: {
        fontSize: 16,
    },
});

export default Genderdropdown;
