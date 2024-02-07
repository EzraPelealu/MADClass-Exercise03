import React from 'react';
import {Text, StyleSheet} from 'react-native';

//Komentar
const Title = () => {
  //Komentar
  const title = 'Poling Debat Pemilihan Capres & Cawapres 2024-2029';
  return (
    <>
      {/* Komentar */}
      <Text style={style.title}>{title}</Text>
    </>
  );
};

//Komentar
const style = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
});

export default Title;
