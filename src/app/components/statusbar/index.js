import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function StatusBar() {
  return (
    <View style={styles.container}>
      <Text>Página do Boletim</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7A1FF',
    paddingBottom: 20,
  },
});
