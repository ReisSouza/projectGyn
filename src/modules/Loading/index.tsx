import { Center, Spinner } from "native-base";
import React from "react";

type LoadingProps = {};

const Loading: React.FC<LoadingProps> = ({}: LoadingProps) => {
  return (
    <Center flex={1} bg={"gray.700"}>
      <Spinner color={"green.500"} />;
    </Center>
  );
};
export default Loading;
