import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text>Página de Login</Text>
      <Link href={'./pages/Home'}>ACESSAR</Link>
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
  },
});
