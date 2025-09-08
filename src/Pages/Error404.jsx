import { Col, Row } from "react-grid-system";
import { Tipografia } from "../Components/Tipografia/Tipografia";
import { Link } from "react-router-dom";
import { Botao } from "../Components/Botao/Botao";
import error404 from "../IMG/error404.png";
import LayoutBase from "./Cadastro/LayoutBase";

const Error404 = () => {
  return (
    <LayoutBase>
      <Tipografia componente="h1" variante="h1">
        Ops... Página não encontrada :/
      </Tipografia>
      <Row>
        <Col md={12} sm={12}>
          <img src={error404} alt="Imagem do código 404" />
        </Col>
      </Row>
      <Tipografia componente="body" variante="body">
        Não encontramos a página que você está buscando, mas temos muitas outras
        para você navegar!
      </Tipografia>
      <Row justify="center">
        <Col lg={6} md={6} sm={6} style={{ textAlign: "center" }}>
          <Link to="/">
            <Botao variante="secundaria">Voltar para a home</Botao>
          </Link>
        </Col>
      </Row>
    </LayoutBase>
  );
};

export default Error404;
