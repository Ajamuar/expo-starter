import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Home from "./screens/Home";
/* Add Screen imports here */

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Drawer.Screen name={"Home"} component={Home} />
          {/* Add Screen components to Drawer here */}
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
