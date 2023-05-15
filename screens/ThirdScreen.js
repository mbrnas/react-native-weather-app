import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  Button,
  Image,
} from "react-native";
import Config from "react-native-config";

function ThirdScreen({ navigation }) {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeatherData = () => {
    setIsLoading(true);
    fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": Config.API_KEY,
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setWeatherData(response);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.everything}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={city}
            onChangeText={setCity}
            placeholder="Enter a city"
          />
          <Button
            style={styles.button}
            title="Search"
            onPress={fetchWeatherData}
          />
        </View>
        {isLoading ? (
          <ActivityIndicator />
        ) : weatherData ? (
          <View style={styles.fetchView}>
            <View style={styles.temperatureContainer}>
              <Text style={styles.temperature}>
                {weatherData.current.temp_c}°C
              </Text>
            </View>
            <Text style={styles.text}>
              {weatherData.location.name}, {weatherData.location.region},{" "}
              {weatherData.location.country}
            </Text>
            <View style={styles.infoContainer}>
              <View style={styles.info}>
                <Text style={styles.infoText}>
                  Wind: {weatherData.current.wind_kph} km/h
                </Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoText}>
                  UV Index: {weatherData.current.uv}
                </Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoText}>
                  Humidity: {weatherData.current.humidity}%
                </Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoText}>
                  hPa: {weatherData.current.pressure_mb}%
                </Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoText}>
                  Feels like: {weatherData.current.feelslike_c}℃
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <Text style={styles.text}>
            Enter a city to search for weather information.
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  everything: {
    backgroundColor: "white",
  },
  container: {
    margin: 60,
    display: "flex",
    gap: 5,
  },
  text: {
    textAlign: "center",
    padding: 5,
    color: "black",
  },
  text1: {
    textAlign: "center",
    backgroundColor: "#0096FF",
    padding: 10,
    color: "white",
    width: 160,
    borderRadius: 20,
    margin: 10,
  },
  text2: {
    textAlign: "center",
    backgroundColor: "#0096FF",
    padding: 20,
    color: "white",
    width: 160,
    borderRadius: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 10,
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
  },
  fetchView: {
    display: "flex",
    gap: 5,
    textAlign: "center",
  },
  firstContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
    justifyContent: "center",
  },
  temperature: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  info: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoContainer: {
    gap: 30,
  },
});

export default ThirdScreen;
