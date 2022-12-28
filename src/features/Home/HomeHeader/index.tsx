import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Heading, HStack, Text, VStack, Icon } from "native-base";

import { Avatar } from "@components/index";
import { TouchableOpacity } from "react-native";

type HomeHeaderProps = {};

const HomeHeader: React.FC<HomeHeaderProps> = ({}: HomeHeaderProps) => {
  return (
    <HStack space={4} bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <Avatar
        size={16}
        source={{ uri: "https://github.com/reissouza.png" }}
        alt="Image do usuario"
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Ola,
        </Text>
        <Heading fontFamily="heading" color="gray.100" fontSize="md">
          Reis Souza
        </Heading>
      </VStack>
      <TouchableOpacity>
        <Icon as={MaterialIcons} size={7} color="gray.200" name="logout" />
      </TouchableOpacity>
    </HStack>
  );
};
export default HomeHeader;
