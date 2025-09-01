import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
import { ProvedorTema } from "./Components/ProvedorTema/ProvedorTema";
import { Estilos } from "./Components/EstilosGlobais/Estilos";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <RouterProvider router={router} />
    </ProvedorTema>
  );
}

export default App;
