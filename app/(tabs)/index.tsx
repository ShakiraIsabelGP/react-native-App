import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './_layout';

export default function HomeScreen() {
  return (   
     <View style={styles.container}>
    <Text style={styles.text}>You have to access first</Text>
    <Link href="/login">Go to Login</Link>
  </View>);
}


