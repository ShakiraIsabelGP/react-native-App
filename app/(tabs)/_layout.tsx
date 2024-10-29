import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{title: 'Home'}}/>
      <Tabs.Screen name="login" options={{title: 'Login'}}/>
      <Tabs.Screen name="profile" options={{ title: 'Profile'}} />
    </Tabs>
  );
}

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' },
  text: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 },
  input: { 
    borderBottomWidth: 1,
     marginBottom: 20, 
     padding: 8 },
});
