import { Button as ButtonNative, IButtonProps } from "native-base";
import React from "react";

type ButtonProps = IButtonProps & {
  label: string;
  variant?: "solid" | "outline";
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonNative
      w="full"
      h="14"
      rounded="sm"
      borderColor={variant === "outline" ? "green.700" : ""}
      bg={variant === "outline" ? "transparent" : "green.700"}
      _text={{
        fontFamily: "heading",
        fontSize: "sm",
        color: variant === "outline" ? "green.700" : "white",
      }}
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "green.500",
      }}
      variant={variant}
      {...rest}
    >
      {label}
    </ButtonNative>
  );
};
export default Button;
