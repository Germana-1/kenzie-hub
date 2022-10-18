import { useContext } from "react";
import { TechContext } from "../../context/TechContext";
import { BsTrash } from "react-icons/bs";
import { ListStyled } from "../../styles/list";

export const TechList = () => {
  const { techList, deleteTech } = useContext(TechContext);

  return (
    <ListStyled>
      {techList &&
        techList.map((tech) => (
          <li key={tech.id}>
            <h2>{tech.title}</h2>
            <span>{tech.status}</span>
            <button onClick={() => deleteTech(tech.id)}>
              <BsTrash />
            </button>
          </li>
        ))}
    </ListStyled>
  );
};
