import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SunnyRadar from "./screens/SunnyRadar";
import LockScreen from "./screens/LockScreen";
import ThirdScreen from "./screens/ThirdScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: false,
        }}
      >
        <Stack.Screen name="Lock" component={LockScreen} />
        <Stack.Screen name="Sunny Radar" component={SunnyRadar} />

        <Stack.Screen name="Third" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    /**comment to see */
  );
}
