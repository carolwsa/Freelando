import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../Pages/Cadastro/SelecaoCliente";
import LayoutBase from "../Pages/Cadastro/LayoutBase";
import Base from "../Pages/Base";
import Interesses from "../Pages/Cadastro/Interesses";
import DadosPessoais from "../Pages/Cadastro/DadosPessoais";
import Concluido from "../Pages/Cadastro/Concluido";
import PaginaInicial from "../Pages/Paginainicial";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
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
          {
            path: "paginaInicial",
            element: <PaginaInicial />,
          },
        ],
      },
    ],
  },
]);
