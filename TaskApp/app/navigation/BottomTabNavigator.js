import * as React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import LoginScreen from "../screens/LoginScreen";
import CharacterScreen from "../screens/CharacterScreen";
import QuestScreen from "../screens/QuestScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TabBarIcon from "../components/TabBarIcon";
import TaskScreen from "../screens/TaskScreen";
import { useIsFocused } from "@react-navigation/native";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

const BottomTab = createMaterialTopTabNavigator();
const INITIAL_ROUTE_NAME = "Login";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      swipeEnabled={true}
      tabBarOptions={{
        // activeBackgroundColor: "black"
        activeTintColor: Colors.navActive,
        showIcon: true,
        showLabel: false,
        indicatorStyle: {
          backgroundColor: Colors.navActive,
        }
      }}
      tabBarPosition="bottom"
    >
      <BottomTab.Screen
        name="Tasks"
        component={TaskScreen}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons
              focused={focused}
              name="checkbox-multiple-marked-circle-outline"
              color={color}
              size={Layout.navIconSize}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Quests"
        component={QuestScreen}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons
              focused={focused}
              name="script-outline"
              color={color}
              size={Layout.navIconSize}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Character"
        component={CharacterScreen}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialIcons
              focused={focused}
              name="person-outline"
              color={color}
              size={Layout.navIconSize}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons
              focused={focused}
              name="settings-outline"
              color={color}
              size={Layout.navIconSize}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Login":
      return "Login";
    case "Settings":
      return "Settings";
    case "Quests":
      return "Quests";
    case "Tasks":
      return "Tasks";
  }
}
