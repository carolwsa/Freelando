import { Card } from "./Components/Card/Card";
import { Estilos } from "./Components/EstilosGlobais/Estilos";
import { ProvedorTema } from "./Components/ProvedorTema/ProvedorTema";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
