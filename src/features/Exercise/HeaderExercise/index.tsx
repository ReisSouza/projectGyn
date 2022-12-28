import { Heading, HStack, Icon, Text, VStack } from "native-base";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BodySvg from "@assets/body.svg";
type HeaderExerciseProps = {};

const HeaderExercise: React.FC<
  HeaderExerciseProps
> = ({}: HeaderExerciseProps) => {
  const { goBack } = useNavigation();
  return (
    <VStack space={4} px="8" pt="12" pb="8" bg="gray.600">
      <TouchableOpacity onPress={goBack}>
        <Icon as={Feather} name="arrow-left" size={6} color="green.500" />
      </TouchableOpacity>
      <HStack justifyContent="space-between">
        <Heading fontFamily="heading" flexShrink={1} fontSize="lg" color="gray.200">
          Puxada frontal
        </Heading>
        <HStack alignItems="center" space="2">
          <BodySvg />
          <Text fontSize="md" color="gray.200">
            Costas
          </Text>
        </HStack>
      </HStack>
    </VStack>
  );
};
export default HeaderExercise;
