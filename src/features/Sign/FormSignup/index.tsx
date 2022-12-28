import React from "react";
import { Stack } from "native-base";
import { Button } from "@components/index";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@modules/index";

import { zodResolver } from "@hookform/resolvers/zod";
import { schemaSignUp } from "./schemaValidation";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

type FormSigninProps = {
  onBack: () => void;
  handleSingUp: (data: FormDataProps) => void;
};

const FormSignup: React.FC<FormSigninProps> = ({
  onBack,
  handleSingUp,
}: FormSigninProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: zodResolver(schemaSignUp),
  });
  const onSubmit = (data: FormDataProps) => {
    handleSingUp(data);
  };

  console.log(errors);
  return (
    <Stack space="12px" alignItems="center" pb="8">
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            placeholder="Nome"
            keyboardType="default"
            onChangeText={onChange}
            value={value}
            returnKeyType="next"
            errorMessage={errors.name?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            placeholder="E-Mail"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={onChange}
            value={value}
            returnKeyType="next"
            errorMessage={errors.email?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            placeholder="Senha"
            secureTextEntry
            onChangeText={onChange}
            value={value}
            returnKeyType="send"
            errorMessage={errors.password?.message}
          />
        )}
      />
      <Controller
        name="passwordConfirm"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            placeholder="Confirma password"
            secureTextEntry
            onChangeText={onChange}
            value={value}
            returnKeyType="send"
            errorMessage={errors.passwordConfirm?.message}
          />
        )}
      />

      <Button label="Criar contar" onPress={handleSubmit(onSubmit)} />
      <Button
        mt="10"
        label="Voltar para para login"
        variant="outline"
        onPress={onBack}
      />
    </Stack>
  );
};
export default FormSignup;
