import { useContext } from "react";
import { TechContext } from "../../context/TechContext";
import { BsTrash, BsPencil } from "react-icons/bs";
import { ListStyled } from "../../styles/list";

export const TechList = () => {
  const { techList, deleteTech, setShowModalUpdate, showModalUpdate, setTech } =
    useContext(TechContext);

  return (
    <ListStyled>
      {techList &&
        techList.map((tech) => (
          <li key={tech.id}>
            <h2>{tech.title}</h2>
            <span>{tech.status}</span>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  return setShowModalUpdate(!showModalUpdate), setTech(tech);
                }}
              >
                <BsPencil />
              </button>
              <button onClick={() => deleteTech(tech.id)}>
                <BsTrash />
              </button>
            </div>
          </li>
        ))}
    </ListStyled>
  );
};
