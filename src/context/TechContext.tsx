import { yupResolver } from "@hookform/resolvers/yup";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  FieldErrorsImpl,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { toast } from "react-toastify";
import api from "../service/api";
import { schema } from "../validation/addTech";
import { UserContext } from "./UserContext";

interface iTechProviderProps {
  children: ReactNode;
}

interface iTechContext {
  techList: iTech[];
  deleteTech(id: string): void;
  updateTech(data: iTech): void;
  showModalUpdate: boolean;
  setShowModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  setTech: React.Dispatch<React.SetStateAction<iTech>>;
  tech: iTech;
  addTech(data: iTech): void;
  register: UseFormRegister<iTech>;
  handleSubmit: UseFormHandleSubmit<iTech>;
  errors: FieldErrorsImpl<iTech>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface iTech {
  title?: string;
  status: string;
  id?: string;
}

export const TechContext = createContext<iTechContext>({} as iTechContext);

export const TechProvider = ({ children }: iTechProviderProps) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [techList, setTechList] = useState<iTech[]>([] as iTech[]);
  const [tech, setTech] = useState<iTech>({} as iTech);
  const { user } = useContext(UserContext);

  const { techs }: iTech[] | any = user;
  useEffect(() => {
    setTechList(techs);
  }, [techs]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iTech>({
    resolver: yupResolver(schema),
  });

  async function addTech(data: iTech) {
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

  async function deleteTech(id: string) {
    const token = window.localStorage.getItem("@TOKEN");

    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;

        await api.delete(`/users/techs/${id}`);
        const newTechList = techList.filter((tech) => tech.id !== id);
        setTechList(newTechList);
        setShowModalUpdate(false);
      } catch (error) {
        console.log(error);
        setShowModalUpdate(false);
      }
    }
  }

  async function updateTech(data: iTech) {
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
