/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Index( {navigation}) {
  return (
    <View style={styles.welcome}>
      <Text style={styles.title}>Bienvenido !</Text>
      <View style={styles.button}>
       <Button title="Ir a la Lista de Razas" onPress={() => navigation.navigate('Lista de Razas')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 30,
  },
  button: {
    padding: 10,
  },
});
