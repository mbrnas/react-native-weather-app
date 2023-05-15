import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

function ImagesScreen() {
  const imageURL1 =
    "https://img.icons8.com/ios-glyphs/30/null/temperature--v1.png";
  const imageURL2 = "https://img.icons8.com/ios-glyphs/30/000000/sun--v1.png";
  const imageURL3 =
    "https://img.icons8.com/ios-glyphs/30/null/windy-weather.png";
  const imageURL4 =
    "https://img.icons8.com/ios-glyphs/30/null/snowflake.png";
  const imageURL5 = "https://img.icons8.com/ios-filled/50/null/lightning-bolt--v1.png";
  const imageURL6 = "https://img.icons8.com/material-rounded/24/null/room-sound.png";
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image source={{ uri: imageURL4 }} style={styles.image} />
        <Text style={styles.text}>
        The world's largest snowflake ever recorded was 15 inches wide and 8 inches thick. It fell in Montana in 1887, and it is estimated that it weighed approximately 3.5 pounds!
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>
        Lightning can strike the same place twice! In fact, some tall structures like the Empire State Building get struck by lightning up to 100 times a year.
        </Text>
        <Image source={{ uri: imageURL5 }} style={styles.image} />
      </View>

      <View style={styles.section}>
        <Image source={{ uri: imageURL3 }} style={styles.image} />
        <Text style={styles.text}>
        Hurricanes, typhoons, and cyclones are all the same weather phenomenon, but they are called different names depending on where they occur. Hurricanes happen in the Atlantic and Northeast Pacific, typhoons occur in the Northwest Pacific, and cyclones happen in the South Pacific and Indian Ocean.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>
        The temperature can affect the pitch of sound. For example, the strings on a guitar will contract and expand depending on the temperature, which can slightly alter the pitch of the notes played. This is why musicians often tune their instruments before a performance, especially if there has been a significant change in temperature.
        </Text>
        <Image source={{ uri: imageURL6 }} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 20,
    gap: 30
  },
  section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default ImagesScreen;
