import { useContext } from "react";
import { ModalAddTech } from "../../components/ModalAddTech";
import { UserContext } from "../../context/UserContext";
import { TechContext } from "../../context/TechContext";
import { ContainerDashboardStyled } from "../../styles/container";
import { HeaderDashboardStyled } from "../../styles/header";
import { LinkStyled } from "../../styles/link";
import { TechList } from "../../components/TechList";
import { IoMdAdd } from "react-icons/io";
import { ModalUpdateTech } from "../../components/ModalUpdateTech";

export const DashboardPage = () => {
  const { user, logout } = useContext(UserContext);
  const { showModal, setShowModal, showModalUpdate } = useContext(TechContext);

  return (
    <ContainerDashboardStyled>
      <HeaderDashboardStyled className="dashboard">
        <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="logo" />
        <LinkStyled to={"/"} onClick={logout}>
          Sair
        </LinkStyled>
      </HeaderDashboardStyled>
      <main>
        <div className="user">
          <h1>Olá, {user.name}</h1>
          <span>{user.course_module}</span>
        </div>

        <div className="containerBtnAdd">
          <h2>Tecnologias</h2>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              return setShowModal(!showModal);
            }}
          >
            <IoMdAdd />
          </button>
        </div>

        <TechList />
      </main>
      {showModal && <ModalAddTech />}
      {showModalUpdate && <ModalUpdateTech />}
    </ContainerDashboardStyled>
  );
};
