import React from "react";
import { Stack, Center, Text } from "native-base";
import { Input, Button } from "@components/index";

type FormSigninProps = {
  onSubmit: () => void;
  onCreateAccount: () => void;
};

const FormSignin: React.FC<FormSigninProps> = ({
  onCreateAccount,
  onSubmit,
}: FormSigninProps) => {
  return (
    <Stack space="12px" pb={8}>
      <Input
        placeholder="E-Mail"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input placeholder="Senha" secureTextEntry />
      <Button label="Acessar" onPress={onSubmit} />
      <Center width="full" mt="16">
        <Text color={"white"} mb="2">
          Ainda não tem acesso?
        </Text>
        <Button
          label="Criar conta"
          variant="outline"
          onPress={onCreateAccount}
        />
      </Center>
    </Stack>
  );
};
export default FormSignin;
