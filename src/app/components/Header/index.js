import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoggedUser, LoggedUserName, Logo, SafeHeader } from './styles';
import LogoPng from '../../assets/Logo.png';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <SafeHeader>
      <Logo source={LogoPng} />
      <LoggedUser>
        <LoggedUserName>Yara Mendes</LoggedUserName>
        <Ionicons
          name="person-circle"
          size={32}
          color="#6700b3"
        />
      </LoggedUser>
    </SafeHeader>
  );
}
