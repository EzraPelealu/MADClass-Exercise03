import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({placeholder}) => {
  return <TextInput placeholder={placeholder} style={style.inputNama} />;
};

const style = StyleSheet.create({
  inputNama: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
});

export default Input;
