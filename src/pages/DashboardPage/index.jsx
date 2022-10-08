import axios from "axios";
import { useEffect, useState } from "react";
import { ContainerDashboardStyled } from "../../styles/container";
import { HeaderDashboardStyled } from "../../styles/header";
import { LinkStyled } from "../../styles/link";

export const DashboardPage = () => {
  const [data, setData] = useState({});

  const token = window.localStorage.getItem("@TOKEN");

  useEffect(() => {
    axios
      .get("https://kenziehub.herokuapp.com/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  });

  const logout = () => {
    window.localStorage.clear();
  };

  return (
    <ContainerDashboardStyled>
      <HeaderDashboardStyled className="dashboard">
        <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="logo" />
        <LinkStyled to={"/"} onClick={logout}>
          Sair
        </LinkStyled>
      </HeaderDashboardStyled>
      <main>
        <div>
          <h1>Olá, {data.name}</h1>
          <span>{data.course_module}</span>
        </div>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </main>
    </ContainerDashboardStyled>
  );
};
