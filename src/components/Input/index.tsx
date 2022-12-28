import * as N from "native-base";
import React from "react";

export type InputProps = N.IInputProps & {
  isSecondary?: boolean;
};

const Input: React.FC<InputProps> = ({ isSecondary, ...field }: InputProps) => {
  return (
    <N.Input
      bg={isSecondary ? "gray.600" : "gray.700"}
      h="14"
      px="4"
      borderColor="gray.700"
      fontSize="md"
      color="white"
      placeholderTextColor="gray.300"
      _focus={{
        bg: "gray.700",
        borderColor: "green.500",
      }}
      {...field}
    />
  );
};
export default Input;
