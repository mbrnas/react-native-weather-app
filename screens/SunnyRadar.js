import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ThirdScreen from "./ThirdScreen";
import MapScreen from "./MapScreen";
import ImagesScreen from "./ImagesScreen";
import ShareScreen from "./ShareScreen";
import MyScreen from "./MyScreen";
function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content1}>
        <Text style={styles.textTitle}>Weather Forecast</Text>
        <Text style={[styles.text, { marginBottom: 20 }]}>
          SunnyRadar offers users to view temperature and current wind speed, UV
          index and Humidity.
        </Text>
      </View>

      <View style={styles.content2}>
        <Text style={styles.textTitle}>Current Weather</Text>
        <Text style={[styles.text, { marginBottom: 20 }]}>
          SunnyRadar lets its users view information about the current weather
          surrounding them, giving them a chance to know what should they wear
          in case of rain, or snow, or even sunshine.
        </Text>
      </View>

      <View style={styles.content3}>
        <Text style={styles.textTitle2}>Why us?</Text>
        <Text style={[styles.text, { marginBottom: 20 }]}>
          We at SunnyRadar care about our users, and want all people to have the
          most correct and current information about the weather. We have the
          top programmers and meteorologists working on our application!
        </Text>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={AboutScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={styles.image}
                source={require("../assets/images/home.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="API Call"
        component={ThirdScreen}
        options={{
          title: "Weather",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={styles.image}
                source={require("../assets/images/api.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Map",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={styles.image}
                source={require("../assets/images/map.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Images"
        component={ImagesScreen}
        options={{
          title: "Images",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={styles.image}
                source={require("../assets/images/images.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Share"
        component={ShareScreen}
        options={{
          title: "Share",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={styles.image}
                source={require("../assets/images/share.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Survey"
        component={MyScreen}
        options={{
          title: "Survey",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={styles.image}
                source={require("../assets/images/survey.png")}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  content1: {
    padding: 20,
  },
  content2: {
    padding: 20,
  },
  content3: {
    padding: 20,
  },
  textTitle: {
    color: "#0096FF",
    fontSize: 30,
    textAlign: "center",
  },
  text: {
    marginTop: 20,
    textAlign: "center",
  },
  textTitle2: {
    color: "#0096FF",
    fontSize: 30,
    textAlign: "center",
  },
});

export default MyTabs;
