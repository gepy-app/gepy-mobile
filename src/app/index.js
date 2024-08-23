import { Link } from 'expo-router';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Logo from './assets/Logo.png';
import { LoginLogo } from './styles';

export default function Page() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'#D7A1FF'}
        barStyle={'dark-content'}
      />
      <LoginLogo source={Logo} />

      <Text>Página de Login</Text>
      <Link href={'./pages/home'}>ACESSAR</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 100,
    backgroundColor: '#D7A1FF',
  },
});
