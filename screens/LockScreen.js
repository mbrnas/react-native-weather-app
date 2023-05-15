import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

function LockScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const saveCredentials = async () => {
    try {
      await AsyncStorage.setItem(username, password);
      Alert.alert("Successfully created account!");
    } catch (error) {
      Alert.alert("Error saving credentials:", error);
      navigation.navigate("Sunny Radar");
    }
  };

  const checkCredentials = async () => {
    try {
      const storedPassword = await AsyncStorage.getItem(username);
      if (password === storedPassword) {
        Alert.alert("Successfully logged in!");
        navigation.navigate("Sunny Radar");
      } else {
        Alert.alert("Error, wrong username or password!");
      }
    } catch (error) {
      Alert.alert("Error checking credentials:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sunny Radar ☀️</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Sign Up"
          onPress={saveCredentials}
        />
        <Button
          style={styles.button}
          title="Log In"
          onPress={checkCredentials}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 80,
    paddingBottom: "50%",
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
  },
  image: {
    margin: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    padding: 15,
    margin: 10,
    width: 250,
    borderRadius: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
});

export default LockScreen;
