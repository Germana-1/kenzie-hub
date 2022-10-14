import { ContainerStyled } from "../../styles/container";
import { LinkStyled } from "../../styles/link";
import { HeaderStyled } from "../../styles/header";
import { ButtonPrimary } from "../../styles/button";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validation/register";

export const RegisterPage = () => {
  const { onSubmitFunctionRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  return (
    <>
      <HeaderStyled>
        <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="logo" />
        <LinkStyled to={"/"}>Voltar</LinkStyled>
      </HeaderStyled>

      <ContainerStyled>
        <h1>Crie sua conta</h1>
        <p>Rapido e grátis, vamos nessa</p>
        <form
          className="form"
          onSubmit={handleSubmit(onSubmitFunctionRegister)}
        >
          <label htmlFor="name">Nome</label>
          <input
            placeholder="Digite aqui seu nome"
            id="name"
            {...register("name")}
          />
          <span> {errors.name?.message}</span>

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

          <label htmlFor="confirmPass">Confirmar senha</label>
          <input
            type={"password"}
            placeholder="Confirme sua senha"
            id="confirmPass"
            {...register("confirmPass")}
          />
          <span>{errors.confirmPass?.message}</span>

          <label htmlFor="bio">Bio</label>
          <input placeholder="Fale sobre você" id="bio" {...register("bio")} />
          <span>{errors.bio?.message}</span>

          <label htmlFor="contact">Contato</label>
          <input
            placeholder="Opção de contato"
            id="contact"
            {...register("contact")}
          />
          <span>{errors.contact?.message}</span>

          <label htmlFor="course_module">Selecionar módulo</label>
          <select
            id="course_module"
            placeholder="Selecione um módulo"
            {...register("course_module")}
          >
            <option value="">Selecione um módulo</option>
            <option value="1° módulo">M1</option>
            <option value="2° módulo">M2</option>
            <option value="3° módulo">M3</option>
            <option value="4° módulo">M4</option>
            <option value="5° módulo">M5</option>
            <option value="6° módulo">M6</option>
          </select>
          <span>{errors.course_module?.message}</span>

          <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
        </form>
      </ContainerStyled>
    </>
  );
};
