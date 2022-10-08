import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RegisterPage } from "./pages/RegisterPage";
import "react-toastify/dist/ReactToastify.css";
import { DashboardPage } from "./pages/DashboardPage";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer
        autoClose={2000}
        toastStyle={{ backgroundColor: "var(--color-grey-2)" }}
      />
    </>
  );
}

export default App;
