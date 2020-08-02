// REACT RESOURCE IMPORTS
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// NAV SCREEN IMPORTS
import useCachedResources from "./app/hooks/useCachedResources";
import BottomTabNavigator from "./app/navigation/BottomTabNavigator";
import LinkingConfiguration from "./app/navigation/LinkingConfiguration";

// LOCAL SCREEN IMPORTS
import CharacterScreen from "./app/screens/CharacterScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MakeProfile from "./app/screens/MakeProfile";
import SettingsScreen from "./app/screens/SettingsScreen";
import TaskScreen from "./app/screens/TaskScreen";
import TaskList from "./app/components/Tasks/TaskList";
import QuestScreen from "./app/screens/QuestScreen";

// ASYNC STORAGE
import GetUserId from "./app/util/GetUser.jsx";
import AsyncStorage from "@react-native-community/async-storage";
import ClearAsync from "./app/util/ClearAsync.jsx";

export default function App() {
  const Stack = createStackNavigator();
  const isLoadingComplete = useCachedResources();
  const userId = GetUserId();
  ClearAsync();

  console.log(userId);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {/* {userId == null && ( */}
              {(<Stack.Screen name="LoginScreen" component={LoginScreen} />
            )}
            {/* {userId == null && ( */}
              {(<Stack.Screen name="MakeProfile" component={MakeProfile} />
            )}
            <Stack.Screen name="BotNav" component={BottomTabNavigator} />
            {/* Character Screen and Setting Screen need to be handled by Stack Nav */}
            <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
            <Stack.Screen name="QuestScreen" component={QuestScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
