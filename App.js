import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import StarterIntro from "./screens/StarterIntro";
/* Add Screen imports here */

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
          <Drawer.Screen name={"Starter intro"} component={StarterIntro} />
          {/* Add Screen components to Drawer here */}
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
