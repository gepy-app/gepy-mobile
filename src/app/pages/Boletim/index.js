import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import UserHeader from '../../components/userHeader';
import Notas from '../../assets/notas.png';

export default function Boletim() {
  return (
    <View style={styles.container}>
      <UserHeader />
      <ScrollView>
        <Text style={{ padding: 20, alignSelf: 'center', color: 'white' }}>
          Boletim do aluno
        </Text>
        <Image source={Notas} />
      </ScrollView>
      <StatusBar style='auto' />
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
