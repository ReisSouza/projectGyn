import React from "react";
import { Heading, HStack, Image, Text, VStack, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

type ExerciceCardProps = TouchableOpacityProps & {};

const ExerciceCard: React.FC<ExerciceCardProps> = ({
  ...rest
}: ExerciceCardProps) => {
  return (
    <TouchableOpacity {...rest}>
      <HStack space={5} alignItems="center" p={2} pr="4" bg="gray.500" mb={3}>
        <Image
          source={{
            uri: "https://tse1.explicit.bing.net/th?id=OIP.KlBMbPOzXKPyXaGrqbTjwwHaE8&pid=Api&P=0",
          }}
          w={16}
          h={16}
          alt=""
          rounded="md"
          resizeMode="center"
        />
        <VStack flex={1}>
          <Heading fontFamily="heading" fontSize="lg" color="white">
            Supino reto
          </Heading>
          <Text fontSize="md" color="gray.200" mt={1} numberOfLines={2}>
            3 séria x 12 repetições
          </Text>
        </VStack>

        <Icon
          as={Entypo}
          name="chevron-thin-right"
          color="gray.300"
          h={16}
          w={16}
        />
      </HStack>
    </TouchableOpacity>
  );
};
export default ExerciceCard;
