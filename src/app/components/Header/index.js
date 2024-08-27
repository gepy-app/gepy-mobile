import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeHeader } from './styles';

export default function Header() {
  return (
    <SafeHeader>
      <View>
        <Text>Página do Boletim</Text>
      </View>
    </SafeHeader>
  );
}
