import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validation/login";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ContainerStyled } from "../../styles/container";
import { HeaderStyled } from "../../styles/header";
import { LinkRegisterStyled } from "../../styles/link";
import { ButtonPrimary } from "../../styles/button";

export const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitFunction = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        return (
          window.localStorage.clear(),
          window.localStorage.setItem("@TOKEN", response.data.token),
          window.localStorage.setItem("@USERID", response.data.user.id),
          navigate("/dashboard")
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <HeaderStyled>
        <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="logo" />
      </HeaderStyled>

      <ContainerStyled>
        <h1>Login</h1>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Digite aqui seu email"
            id="email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="password">Senha</label>
          <input
            type={"password"}
            placeholder="Digite aqui sua senha"
            id="password"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>

          <ButtonPrimary type="submit">Enviar</ButtonPrimary>
        </form>
        <p>Ainda não possui uma conta?</p>
        <LinkRegisterStyled to={"/register"}>Cadastre-se</LinkRegisterStyled>
      </ContainerStyled>
    </>
  );
};
