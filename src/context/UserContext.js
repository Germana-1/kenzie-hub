import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const token = window.localStorage.getItem("@TOKEN");

  useEffect(() => {
    token
      ? axios
          .get("https://kenziehub.herokuapp.com/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setUser(response.data);
            if (response) {
              navigate("/dashboard");
            }
          })
          .catch((error) => {
            console.log(error);
            if (error) {
              window.localStorage.clear();
            }
          })
      : navigate("/");
  }, [token]);

  const logout = () => {
    window.localStorage.clear();
  };

  const onSubmitFunctionRegister = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        if (response) {
          toast.success("Conta criada com sucesso!");
        }
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        if (error) {
          toast.error("Ops! Algo deu errado");
        }
      });
  };

  const onSubmitFunctionLogin = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        return (
          window.localStorage.clear(),
          window.localStorage.setItem("@TOKEN", response.data.token),
          window.localStorage.setItem("@USERID", response.data.user.id),
          navigate("/dashboard")
        );
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          toast.error("Email e/ou senha inválidos");
        }
      });
  };

  return (
    <UserContext.Provider
      value={{
        onSubmitFunctionLogin,
        onSubmitFunctionRegister,
        logout,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
