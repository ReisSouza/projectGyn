import { Button, Input } from "@components/index";
import { Text, View, VStack } from "native-base";
import React from "react";

type FormInforuserProps = {};

const FormInforuser: React.FC<
  FormInforuserProps
> = ({}: FormInforuserProps) => {
  return (
    <VStack px="8" space={3} pb="10">
      <Input isSecondary placeholder="Nome" />
      <Input isSecondary placeholder="E-Mail" isDisabled />
      <Text color="gray.200" fontSize="md" mt="4">
        Alterar senha
      </Text>
      <Input isSecondary placeholder="Senha antiga" secureTextEntry />
      <Input isSecondary placeholder="Nova senha" secureTextEntry />
      <View mt="4" />
      <Button variant="solid" label="Atualizar" />
    </VStack>
  );
};
export default FormInforuser;
