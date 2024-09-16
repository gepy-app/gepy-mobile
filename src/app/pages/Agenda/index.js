import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import UserHeader from '../../components/userHeader';
import Semana from '../../assets/Semana.png';
import Horas from '../../assets/Frame7.png';
import { Imagem, Scrolar } from './styles';

export default function Agenda() {
  return (
    <View style={styles.container}>
      <UserHeader />
      <Scrolar>
        <Imagem source={Semana} />
        <Imagem source={Horas} />
      </Scrolar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7A1FF',
    paddingBottom: 20,
  },
});
