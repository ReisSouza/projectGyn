import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Sign } from "@screens/index";
type AuthRoutes = {
  sign: undefined;
};

export type AuthRoutesNavigatorProps = NativeStackNavigationProp<AuthRoutes>;
const AuthRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="sign" component={Sign} />
    </Navigator>
  );
};

export default AuthRoutes;
