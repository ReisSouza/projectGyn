import React, { useState } from "react";

import { Logo } from "@modules/index";
import { FormSignin, FormSignup } from "@features/index";
import { Container } from "@components/index";
import { Heading, View } from "native-base";

type HomeProps = {};

const SiginIn: React.FC<HomeProps> = ({}: HomeProps) => {
  const [isCreateAccount, setIsCreteAccount] = useState(false);
  return (
    <Container isBackground isScrolling>
      <Logo />
      <View justifyContent={"flex-end"} width="full" flex={1} px="10">
        <Heading
          fontFamily="heading"
          textAlign="center"
          color="gray.100"
          fontSize="xl"
          mb="3"
        >
          {isCreateAccount ? "Criar contar" : "Acessar sua conta"}
        </Heading>
        {isCreateAccount ? (
          <FormSignup
            onBack={() => setIsCreteAccount(false)}
            handleSingUp={(data) => console.log(data)}
          />
        ) : (
          <FormSignin
            onCreateAccount={() => setIsCreteAccount(true)}
            onSubmit={() => {}}
          />
        )}
      </View>
    </Container>
  );
};
export default SiginIn;
