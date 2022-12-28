import { Input } from "@components/index";
import { InputProps } from "@components/Input";
import { Text, FormControl } from "native-base";
import React from "react";

type TextFieldProps = InputProps & {
  label?: string;
  errorMessage?: string;
  isSecondary?: boolean;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  errorMessage,
  isInvalid = false,
  ...field
}: TextFieldProps) => {
  const invalid = isInvalid || !!errorMessage;

  return (
    <FormControl w="full" isInvalid={invalid}>
      {label && <Text>{label}</Text>}
      <Input
        {...field}
        isInvalid={invalid}
        _invalid={{
          borderColor: "error.900",
        }}
      />
      {errorMessage && (
        <FormControl.ErrorMessage textAlign="right">
          {errorMessage}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};
export default TextField;
