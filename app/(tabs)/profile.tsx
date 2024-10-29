import { useRouter, useGlobalSearchParams } from 'expo-router';
import { View, Text, Button } from 'react-native';
import { styles } from './_layout'; 

export default function Profile() {
  const { name } = useGlobalSearchParams();
  const router = useRouter();

  const handleLogout = () => {
    router.push('/'); 
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {name || 'Guest'}!</Text>
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
}
