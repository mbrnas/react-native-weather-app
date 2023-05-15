import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyScreen = () => {
  const [favoriteWeather, setFavoriteWeather] = useState('');
  const [favoriteDay, setFavoriteDay] = useState('');
  const [name, setName] = useState('');
  const [favoriteCountry, setFavoriteCountry] = useState('');
  const [age, setAge] = useState('');

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('favoriteWeather', favoriteWeather);
      await AsyncStorage.setItem('favoriteDay', favoriteDay);
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('favoriteCountry', favoriteCountry);
      await AsyncStorage.setItem('age', age);
      console.log('Data saved successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveData = async () => {
    try {
      const favoriteWeatherValue = await AsyncStorage.getItem('favoriteWeather');
      const favoriteDayValue = await AsyncStorage.getItem('favoriteDay');
      const nameValue = await AsyncStorage.getItem('name');
      const favoriteCountryValue = await AsyncStorage.getItem('favoriteCountry');
      const ageValue = await AsyncStorage.getItem('age');
      alert(`Favorite weather: ${favoriteWeatherValue}, Favorite day: ${favoriteDayValue}, Name: ${nameValue}, Favorite country: ${favoriteCountryValue}, Age: ${ageValue}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your favorite weather:</Text>
      <TextInput style={styles.input} value={favoriteWeather} onChangeText={setFavoriteWeather} />
      <Text style={styles.label}>Enter your favorite day:</Text>
      <TextInput style={styles.input} value={favoriteDay} onChangeText={setFavoriteDay} />
      <Text style={styles.label}>Enter your favorite country:</Text>
      <TextInput style={styles.input} value={favoriteCountry} onChangeText={setFavoriteCountry} />
      <Text style={styles.label}>Enter your name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Enter your age:</Text>
      <TextInput style={styles.input} value={age} onChangeText={setAge} />
      <Button title="Save" onPress={storeData} />
      <Button title="Retrieve" onPress={retrieveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    gap: 6
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 15,
    marginBottom: 16,
  },
});

export default MyScreen;
