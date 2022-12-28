import { IPressableProps, Pressable, Text } from "native-base";
import React from "react";

type GroupButtonProps = IPressableProps & {
  name: string;
  isActive?: boolean;
};

const ButtonGroup: React.FC<GroupButtonProps> = ({
  name,
  isActive = false,
  ...rest
}: GroupButtonProps) => {
  return (
    <Pressable
      w={24}
      h={10}
      mr={4}
      bg="gray.600"
      rounded="md"
      alignItems="center"
      justifyContent="center"
      isPressed={isActive}
      _pressed={{
        borderColor: "green.500",
        borderWidth: 1,
      }}
      {...rest}
    >
      <Text
        color={isActive ? "green.500" : "gray.200"}
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  );
};
export default ButtonGroup;
