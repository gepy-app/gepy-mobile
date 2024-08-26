import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Agenda() {
  return (
    <View style={styles.container}>
      <Text>Página da Agenda</Text>
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
