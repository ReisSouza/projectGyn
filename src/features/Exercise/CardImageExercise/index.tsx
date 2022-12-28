import { HStack, Image, Text, VStack } from "native-base";
import React from "react";
import ExerciseSvg from "@assets/series.svg";
import RepetiionsSvg from "@assets/repetitions.svg";
import { Button } from "@components/index";
type CardImageExerciceProps = {};

const CardImageExercice: React.FC<
  CardImageExerciceProps
> = ({}: CardImageExerciceProps) => {
  return (
    <VStack p="8" space={4}>
      <Image
        width="100%"
        h={80}
        alt=""
        resizeMode="cover"
        rounded="lg"
        source={{
          uri: "https://musculacaoonline.com.br/wp-content/uploads/2014/02/Treino-de-muscula%C3%A7%C3%A3o-para-for%C3%A7a-m%C3%A1xima-1024x499.jpg",
        }}
      />
      <VStack bg="gray.600" space={3} px="4" pt="5" pb="4" rounded="lg">
        <HStack justifyContent="space-evenly" width="full">
          <HStack alignItems={"center"} space="3">
            <ExerciseSvg />
            <Text color="gray.200">3 series</Text>
          </HStack>
          <HStack alignItems={"center"} space="3">
            <RepetiionsSvg />
            <Text color="gray.200">12 repetições</Text>
          </HStack>
        </HStack>
        <Button label="Marca como realizada" />
      </VStack>
    </VStack>
  );
};
export default CardImageExercice;
