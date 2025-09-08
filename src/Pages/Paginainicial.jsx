import { Col, Row } from "react-grid-system";
import { Tipografia } from "../Components/Tipografia/Tipografia";
import cliente from "./Cadastro/assets/procurandocliente.jpg";
import { Header } from "../Components/Header/Header";
import { Card } from "../Components/Card/Card";

const PaginaInicial = () => {
  return (
    <>
      <Header />
      <Row justify="center">
        <Col
          xxx={6}
          xxl={6}
          xl={6}
          lg={6}
          md={8}
          sm={12}
          style={{ margin: "80px 0" }}
        >
          <Card>
            <div style={{ textAlign: "center" }}>
              <Row justify="center">
                <Col lg={10} md={10} sm={12}>
                  <Tipografia variante="h1" componente="h1">
                    Bem-vindo ao Freelando!
                  </Tipografia>
                  <Tipografia variante="body" componente="body">
                    Crie seu perfil gratuitamente para começar a trabalhar com
                    os melhores freelancers. Em seguida, você poderá dar mais
                    detalhes sobre suas demandas e sobre sua forma de trabalho.
                  </Tipografia>
                  <Row>
                    <Col md={6} sm={12}>
                      <img
                        style={{
                          width: "524px",
                          height: "323px",
                          marginLeft: "-35px",
                          borderRadius: "20px",
                        }}
                        src={cliente}
                        alt="Mulher jovem, sentada à frente de um computador e expressão sorridente."
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PaginaInicial;
