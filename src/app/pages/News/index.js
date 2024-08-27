import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';

export default function News() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Página de Noticias</Text>
      <StatusBar style="auto" />
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
