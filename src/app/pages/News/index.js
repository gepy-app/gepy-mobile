import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import PurpleNewsletter from '../../assets/Purple-Newsletter.png';
import UserHeader from '../../components/userHeader';

export default function News() {
  return (
    <View style={styles.container}>
      <UserHeader />
      <ScrollView>
        <Image source={PurpleNewsletter} style={styles.image} />
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
    // marginTop:100,
  },
});
