import { Tipografia } from "../../Components/Tipografia/Tipografia";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../Components/Botao/Botao";
import { Link } from "react-router-dom";
import clienteMulher from "./assets/freelers.png";

const Concluido = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Tipografia variante="h1" componente="h1">
          Seu perfil está completo!
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Agora é só começar a se conectar com os melhores freelancers do
          mercado!
        </Tipografia>
        <Row>
          <Col md={6} sm={12}>
            <img
              src={clienteMulher}
              alt="Mulher jovem de cabelos cacheados e óculos, sentada à frente de um computador com a mão apoiada no queixo e expressão sorridente."
            />
          </Col>
        </Row>
        <Row justify="center">
          <Col lg={6} md={6} sm={6} style={{ textAlign: "center" }}>
            <Link to="/cadastro/paginaInicial">
              <Botao variante="secundaria">Voltar para a home</Botao>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Concluido;
