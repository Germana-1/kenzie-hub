import { useContext } from "react";

import { TechContext } from "../../context/TechContext";

import { ButtonPrimary } from "../../styles/button";
import { ModalStyled } from "../../styles/modal";

export const ModalUpdateTech = () => {
  const {
    updateTech,
    register,
    handleSubmit,
    errors,
    setShowModalUpdate,
    tech,
  } = useContext(TechContext);

  return (
    <ModalStyled>
      <div>
        <div>
          <h2>Cadastrar Tecnologia</h2>
          <span onClick={() => setShowModalUpdate(false)}>x</span>
        </div>

        <form className="form" onSubmit={handleSubmit(updateTech)}>
          <label htmlFor="title">Nome</label>
          <input
            placeholder="Nome da tecnologia"
            id="title"
            value={tech.title}
            {...register("title")}
          />

          <span>{errors.title?.message}</span>

          <label htmlFor="status">Selecionar status</label>

          <select id="status" {...register("status")}>
            <option value="">Selecione um status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <span>{errors.status?.message}</span>

          <ButtonPrimary type="submit">Editar Tecnologia</ButtonPrimary>
        </form>
      </div>
    </ModalStyled>
  );
};
