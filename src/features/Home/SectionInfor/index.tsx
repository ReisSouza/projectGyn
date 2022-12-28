import { Heading, HStack, Text } from "native-base";
import React from "react";

type TitleSectionProps = {
  amountExercises: number;
};

const SectionInfor: React.FC<TitleSectionProps> = ({
  amountExercises,
}: TitleSectionProps) => {
  return (
    <HStack justifyContent="space-between">
      <Heading fontFamily="heading" color="gray.200" fontSize="md" mb={5}>
        Exercicios
      </Heading>
      <Text color="gray.200">{amountExercises}</Text>
    </HStack>
  );
};
export default SectionInfor;
