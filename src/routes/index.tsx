import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AuthRoutes from "./auth.routes";
import { useTheme } from "native-base";
import AppRoutes from "./app.routes";

const Routes = () => {
  const theme = DefaultTheme;

  const { colors } = useTheme();

  theme.colors.background = colors.gray[700];

  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};

export default Routes;
