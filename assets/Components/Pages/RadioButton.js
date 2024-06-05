import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RadioButton = ({ options, selectedOption, onSelect }) => {
  return (
    <View>
      {options.map(option => (
        <TouchableOpacity
          key={option.value}
          style={styles.optionContainer}
          onPress={() => onSelect(option.value)}
        >
          <View
            style={[
              styles.radioCircle,
              selectedOption === option.value && styles.selectedRadioCircle
            ]}
          >
            {selectedOption === option.value && <View style={styles.selectedDot} />}
          </View>
          <Text style={styles.optionLabel}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: '7%',
    marginTop: '3%'
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadioCircle: {
    borderColor: '#000',
  },
  selectedDot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#0A6187',
  },
  optionLabel: {
    marginLeft: 10,
  },
});

export default RadioButton;