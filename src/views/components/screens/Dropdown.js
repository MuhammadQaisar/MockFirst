import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    onSelect(option);
    toggleDropdown();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
        <Text style={styles.buttonText}>Select an Option</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdown}>
          {options.map((option, index) => (
            <TouchableOpacity key={index} onPress={() => handleSelectOption(option)} style={styles.option}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 285.5,
    height: 33,
    position: 'absolute',
    left: 41,
    top: 473,
  },
  button: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

// Usage example:
// const options = ['Option 1', 'Option 2', 'Option 3'];
// <DropdownMenu options={options} onSelect={(option) => console.log(option)} />

export default Dropdown;
