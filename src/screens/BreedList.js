/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function BreedList( {navigation} ) {
  const [breed, setBreed] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => {
        setBreed(data.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  //no dejo un key, por que la api no devuelve ningún id o identificador
  return (
    <ScrollView>
    <View style={styles.welcome}>
      {Object.keys(breed).map((item) => <Text style={styles.item} onPress={() => {
        navigation.navigate('Home',{breed: item});
        }}>{item}</Text>)}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22,
  },
  button: {
    padding: 10,
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
