import * as z from "zod";

export const schemaSignUp = z
  .object({
    name: z
      .string({ required_error: "Informe o nome." })
      .trim()
      .min(3, { message: "Nome deve ter pelo menos 3 digitos." })
      .trim(),
    email: z
      .string({ required_error: "E-mail e obrigatorio." })
      .email({ message: "Formato do E-mail invalido." })
      .trim(),
    password: z
      .string({ required_error: "Informe o E-mail." })
      .min(6, { message: "A senha deve ter pelo menos 6 digitos." })
      .trim(),
    passwordConfirm: z.string({
      required_error: "Informe a confirmação de senha.",
    }),
  })
  .refine((schema) => schema.password === schema.passwordConfirm, {
    message: "As senha devem ser iguais.",
    path: ["passwordConfirm"],
  });
