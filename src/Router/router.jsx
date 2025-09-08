import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../Pages/Cadastro/SelecaoCliente";
import LayoutBase from "../Pages/Cadastro/LayoutBase";
import Base from "../Pages/Base";
import Interesses from "../Pages/Cadastro/Interesses";
import DadosPessoais from "../Pages/Cadastro/DadosPessoais";
import Concluido from "../Pages/Cadastro/Concluido";
import PaginaInicial from "../Pages/Paginainicial";
import Home from "../Pages/Home/Home";
import Error404 from "../Pages/Error404";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    ErrorBoundary: Error404,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cadastro",
        element: <LayoutBase />,
        children: [
          {
            path: "",
            element: <SelecaoCliente />,
          },
          {
            path: "interesses",
            element: <Interesses />,
          },
          { path: "dados-pessoais", element: <DadosPessoais /> },
          {
            path: "concluido",
            element: <Concluido />,
          },
        ],
      },
      {
        path: "area-logada",
        children: [
          {
            path: "perfil",
            element: <Profile />,
          },
          {
            path: "paginaInicial",
            element: <PaginaInicial />,
          },
        ],
      },
    ],
  },
]);
