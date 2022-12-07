import React from "react";
import { Text, View } from "react-native";

type HomeProps = {};

const Home: React.FC<HomeProps> = ({}: HomeProps) => {
  return (
    <View>
      <Text>Ola mundo</Text>
    </View>
  );
};
export default Home;
