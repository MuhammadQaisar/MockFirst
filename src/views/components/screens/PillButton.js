import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const PillButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5, // Adjust the horizontal margin here
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const PillButtonContainer = ({ buttons }) => {
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <PillButton key={index} onPress={button.onPress} title={button.title} />
      ))}
    </View>
  );
};

export default PillButton;
