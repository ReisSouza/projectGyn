import React from "react";
import * as N from "native-base";

import LogoSvg from "@assets/logo.svg";

type LogoProps = {};

const Logo: React.FC<LogoProps> = ({}: LogoProps) => {
  return (
    <N.Center my="24">
      <LogoSvg />
      <N.Text color="gray.100">Treine sua mente e o seu corpo</N.Text>
    </N.Center>
  );
};
export default Logo;
