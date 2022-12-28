import { Heading, HStack, Text, VStack } from "native-base";
import React from "react";

type HistoryProps = {
  title: string;
};

const HistoryCard: React.FC<HistoryProps> = ({ title }: HistoryProps) => {
  return (
    <HStack
      w="full"
      px={5}
      py={4}
      mb={3}
      bg="gray.600"
      alignItems="center"
      justifyContent="space-between"
      rounded="md"
    >
      <VStack flex={1}>
        <Heading fontFamily="heading"
          fontSize="md"
          textTransform="capitalize"
          color="white"
          numberOfLines={1}
        >
          Costas
        </Heading>
        <Text fontSize="lg" color="gray.100" numberOfLines={1}>
          {title}
        </Text>
      </VStack>
      <Text fontSize="md" color="gray.300">
        08:59
      </Text>
    </HStack>
  );
};
export default HistoryCard;
