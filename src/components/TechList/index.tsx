import { useContext } from "react";
import { TechContext } from "../../context/TechContext";
import { ListStyled } from "../../styles/list";

export const TechList = () => {
  const { techList, setShowModalUpdate, showModalUpdate, setTech } =
    useContext(TechContext);

  return (
    <ListStyled>
      {techList &&
        techList.map((tech) => (
          <li
            onClick={(e) => {
              e.preventDefault();
              return setShowModalUpdate(!showModalUpdate), setTech(tech);
            }}
            key={tech.id}
          >
            <h2>{tech.title}</h2>
            <span>{tech.status}</span>
          </li>
        ))}
    </ListStyled>
  );
};
