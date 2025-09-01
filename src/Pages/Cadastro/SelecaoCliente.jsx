import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../Components/Tipografia/Tipografia";
import cliente from "./assets/cliente.png";
import freela from "./assets/freela.png";
import { Links } from "../../Components/Header/Itens/Links";
import { Link as RouterLink } from "react-router-dom";
import { useCadastroUsuarioContext } from "../../Context/CadastroUsuario";

const SelecaoCliente = () => {
  const { setPerfil } = useCadastroUsuarioContext();

  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia variante="h1" componente="h1">
        Crie seu cadastro
      </Tipografia>

      <Tipografia variante="h3" componente="h2">
        Como podemos te ajudar?
      </Tipografia>
      <Row>
        <Col md={6} sm={12}>
          <RouterLink to="interesses" onClick={() => setPerfil("cliente")}>
            <img
              src={cliente}
              alt="Mulher de cabelos escuros cacheados e óculos, com a mão apoiada no rosto olhando compenetrada para uma tela."
            />
            <Tipografia componente="body" variante="body">
              Sou cliente e preciso de um freela!
            </Tipografia>
          </RouterLink>
        </Col>
        <Col md={6} sm={12}>
          <img
            src={freela}
            alt="Homem de cabelos escuros curtos, camisa clara e relógio de pulso falando e gesticulando com as mãos."
          />
          <Tipografia componente="body" variante="body">
            Sou um freela e preciso de clientes!
          </Tipografia>
        </Col>
      </Row>
      <div>
        <Tipografia componente="body2" variante="body2">
          Já tem conta?
        </Tipografia>
        <p>
          <Links children={"Faça login!"} tipo="login"></Links>
        </p>
      </div>
    </div>
  );
};

export default SelecaoCliente;
