import { CampoTexto } from "./Components/CampoTexto/CampoTexto";
import { Card } from "./Components/Card/Card";
import { Estilos } from "./Components/EstilosGlobais/Estilos";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { ProvedorTema } from "./Components/ProvedorTema/ProvedorTema";
import { Tipografia } from "./Components/Tipografia/Tipografia";

function App() {
  return (
    <ProvedorTema>
      <Header />
      <Estilos />
      <Card>
        <Tipografia variante="h1" componente="h1">
          Freelando
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores
          freelancers. Em seguida, você poderá dar mais detalhes sobre suas
          demandas e sobre sua forma de trabalho.
        </Tipografia>
        <CampoTexto label={"Nome Completo"} />
      </Card>
      <Footer />
    </ProvedorTema>
  );
}

export default App;
