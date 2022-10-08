import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório*").email("E-mail inválido"),

  password: yup
    .string()
    .required("Senha obrigatória*")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve ter no minimo 8 digitos"),
});
