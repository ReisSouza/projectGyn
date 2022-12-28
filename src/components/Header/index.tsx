import { Center, Heading } from "native-base";
import React from "react";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => {
  return (
    <Center bg="gray.600" h={124}>
      <Heading fontFamily="heading" color="gray.100" fontSize="xl">
        {title}
      </Heading>
    </Center>
  );
};
export default Header;
