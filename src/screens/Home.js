/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList } from 'react-native';

export default function Home({route}) {
  const { breed } = route.params;
  const [breedSelected, setBreedSelected] = useState(breed);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((response) => response.json())
      .then((data) => {
        setBreedSelected(data.message);
        setLoading(false);
      });
  }, [breed]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  //no dejo un key, por que la api no devuelve ningún id o identificador
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{breed.toUpperCase()}</Text>
      <FlatList
        data={breedSelected}
        renderItem={({ item }) => <Image style={styles.image} source={{uri: item}} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    paddingBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 22,
  },
  image: {
    width: 200,
    height: 200,
  }
});
