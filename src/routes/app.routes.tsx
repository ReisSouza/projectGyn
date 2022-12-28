import React from "react";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import HistorySvg from "@assets/history.svg";
import HomeSvg from "@assets/home.svg";
import ProfileSvg from "@assets/profile.svg";

import { Execice, Home, Profile, History } from "@screens/index";
import { useTheme } from "native-base";

import { Platform } from "react-native";

type AppRoutes = {
  home: undefined;
  profile: undefined;
  exercise: undefined;
  history: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const AppRoutes = () => {
  const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();
  const { sizes, colors } = useTheme();
  const iconSize = sizes[6];
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[700],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : "96px",
          paddingBottom: sizes[10],
          paddingTop: sizes[6],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <HomeSvg fill={color} width={iconSize} height={iconSize} />;
          },
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <HistorySvg fill={color} width={iconSize} height={iconSize} />
            );
          },
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <ProfileSvg fill={color} width={iconSize} height={iconSize} />
            );
          },
        }}
      />
      <Screen
        name="exercise"
        component={Execice}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
};

export default AppRoutes;
