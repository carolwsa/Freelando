import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
import { ProvedorTema } from "./Components/ProvedorTema/ProvedorTema";
import { Estilos } from "./Components/EstilosGlobais/Estilos";
import { SessaoUsuarioProvider } from "./Context/SessaoUsuario";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <SessaoUsuarioProvider>
        <RouterProvider router={router} />
      </SessaoUsuarioProvider>
    </ProvedorTema>
  );
}

export default App;
