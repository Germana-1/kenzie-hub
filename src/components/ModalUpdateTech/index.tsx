import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../context/TechContext";
import { ButtonDelete, ButtonPrimary } from "../../styles/button";
import { ModalStyled } from "../../styles/modal";
import { BsTrash } from "react-icons/bs";

export const ModalUpdateTech = () => {
  const { updateTech, setShowModalUpdate, tech, deleteTech } =
    useContext(TechContext);

  const { register, handleSubmit } = useForm({ defaultValues: tech });

  return (
    <ModalStyled>
      <div>
        <div>
          <h2>Editar Tecnologia: {tech.title}</h2>
          <span onClick={() => setShowModalUpdate(false)}>x</span>
        </div>
        <form className="form" onSubmit={handleSubmit(updateTech)}>
          <label htmlFor="status">Selecionar status</label>
          <select id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <div className="containerBtns">
            <ButtonPrimary className="btnEdit" type="submit">
              Editar
            </ButtonPrimary>
            <ButtonDelete
              type="button"
              onClick={() => deleteTech(tech.id as string)}
            >
              <BsTrash />
            </ButtonDelete>
          </div>
        </form>
      </div>
    </ModalStyled>
  );
};
