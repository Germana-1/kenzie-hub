import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../service/api";
import { schema } from "../validation/addTech";
import { UserContext } from "./UserContext";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [techList, setTechList] = useState([]);
  const [tech, setTech] = useState({});
  const { user } = useContext(UserContext);

  const { techs } = user;
  useEffect(() => {
    setTechList(techs);
  }, [techs]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function addTech(data) {
    const token = window.localStorage.getItem("@TOKEN");

    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;

        const { data: newTech } = await api.post("/users/techs", data);
        toast.success("Tecnologia cadastrada com sucesso");
        setShowModal(false);

        setTechList([...techList, newTech]);
      } catch (error) {
        console.log(error);
        if (error) {
          toast.error("Tecnologia já foi cadastrada");
        }
      }
    }
  }

  async function deleteTech(id) {
    const token = window.localStorage.getItem("@TOKEN");

    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;

        await api.delete(`/users/techs/${id}`);
        const newTechList = techList.filter((tech) => tech.id !== id);
        setTechList(newTechList);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function updateTech(data) {
    const token = window.localStorage.getItem("@TOKEN");
    tech.status = data.status;

    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        await api.put(`/users/techs/${tech.id}`, data);
        toast.success("Status alterado com sucesso!");
        setShowModalUpdate(false);
      } catch (error) {
        console.log(error);
        setShowModalUpdate(false);
      }
    }
  }

  return (
    <TechContext.Provider
      value={{
        techList,
        deleteTech,
        updateTech,
        showModalUpdate,
        setShowModalUpdate,
        setTech,
        tech,
        addTech,
        register,
        handleSubmit,
        errors,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
