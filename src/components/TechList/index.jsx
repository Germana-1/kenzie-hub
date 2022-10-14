import { useContext } from "react";
import { TechContext } from "../../context/TechContext";
import { BsTrash } from "react-icons/bs";
import { ListStyled } from "../../styles/list";

export const TechList = () => {
  const { techList, deleteTech } = useContext(TechContext);

  return (
    <ListStyled>
      {techList.length ? (
        techList.map((tech) => (
          <li key={tech.id}>
            <h2>{tech.title}</h2>
            <span>{tech.status}</span>
            <button onClick={() => deleteTech(tech.id)}>
              <BsTrash />
            </button>
          </li>
        ))
      ) : (
        <h3>Sua lista está vazia</h3>
      )}
    </ListStyled>
  );
};
