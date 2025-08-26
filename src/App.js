import { Col, Container, Row } from "react-grid-system";
import { CampoTexto } from "./Components/CampoTexto/CampoTexto";
import { Card } from "./Components/Card/Card";
import { Estilos } from "./Components/EstilosGlobais/Estilos";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { ProvedorTema } from "./Components/ProvedorTema/ProvedorTema";
import { Tipografia } from "./Components/Tipografia/Tipografia";
import { Botao } from "./Components/Botao/Botao";
import { ListaSuspensa } from "./Components/ListaSuspensa/ListaSuspensa";

const estadosBrasileiros = [
  { text: "Acre", value: "AC" },
  { text: "Alagoas", value: "AL" },
  { text: "Amapá", value: "AP" },
  { text: "Amazonas", value: "AM" },
  { text: "Bahia", value: "BA" },
  { text: "Ceará", value: "CE" },
  { text: "Distrito Federal", value: "DF" },
  { text: "Espírito Santo", value: "ES" },
  { text: "Goiás", value: "GO" },
  { text: "Maranhão", value: "MA" },
  { text: "Mato Grosso", value: "MT" },
  { text: "Mato Grosso do Sul", value: "MS" },
  { text: "Minas Gerais", value: "MG" },
  { text: "Pará", value: "PA" },
  { text: "Paraíba", value: "PB" },
  { text: "Paraná", value: "PR" },
  { text: "Pernambuco", value: "PE" },
  { text: "Piauí", value: "PI" },
  { text: "Rio de Janeiro", value: "RJ" },
  { text: "Rio Grande do Norte", value: "RN" },
  { text: "Rio Grande do Sul", value: "RS" },
  { text: "Rondônia", value: "RO" },
  { text: "Roraima", value: "RR" },
  { text: "Santa Catarina", value: "SC" },
  { text: "São Paulo", value: "SP" },
  { text: "Sergipe", value: "SE" },
  { text: "Tocantins", value: "TO" },
];

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Header />
      <Container
        style={{
          marginTop: "80px",
          marginBottom: "80px",
        }}
      >
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Tipografia variante="h1" componente="h1">
                Freelando
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <CampoTexto label={"Nome Completo"} />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <ListaSuspensa
                    titulo={"Estado"}
                    opcoes={estadosBrasileiros}
                  />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto label={"Cidade"} />
                </Col>
              </Row>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <CampoTexto label={"Email"} />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto label={"Senha"} />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto label={"Repita a Senha"} />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Botao variante="secundaria">Anterior</Botao>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div
                    style={{
                      textAlign: "right",
                    }}
                  >
                    <Botao>Próxima</Botao>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </ProvedorTema>
  );
}

export default App;
