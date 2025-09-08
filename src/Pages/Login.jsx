import Label from "../Components/Label/Label";
import { Tipografia } from "../Components/Tipografia/Tipografia";
import logo1 from "../IMG/logo1.png";
import { Col, Row } from "react-grid-system";
import { Card } from "../Components/Card/Card";
import { Header } from "../Components/Header/Header";
import styled from "@emotion/styled";
import { useState } from "react";
import { useSessaoUsuarioContext } from "../Context/SessaoUsuario";
import { useNavigate } from "react-router-dom";

const BotaoEstilizado = styled.button`
  color: white;
  background-color: #ff2600;
  font-weight: 700;
  font-size: 16px;
  width: 25%;
  padding: 0.8rem;
  border: none;
  border-radius: 20px;

  :hover {
    background-color: #b61b00;
  }
`;

const DivEstilizada = styled.div`
  text-align: center;
  padding: 2rem;
  margin-top: -3rem;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { login } = useSessaoUsuarioContext();
  const navigate = useNavigate();

  const aoTentarLogin = async (evento) => {
    evento.preventDefault();

    const loginValido = await login({ email, senha });

    if (loginValido) {
      navigate("/area-logada/paginaInicial"); // Navegue para a página inicial se o login for válido
    } else {
      alert("Email ou senha inválidos. Tente novamente."); // Mostre uma mensagem de erro
    }
  };

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
          <DivEstilizada>
            <img src={logo1} alt="Imagem da Logo" />
          </DivEstilizada>
          <Card>
            <Tipografia componente="h1" variante="h1">
              Efetuar Login
            </Tipografia>
            <form onSubmit={aoTentarLogin}>
              <Label
                children="Email"
                placeholder="Insira seu email"
                tipo="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label
                children="Senha"
                placeholder="Insira sua senha"
                tipo="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <Tipografia componente="legenda" variante="legenda">
                Esqueceu sua senha?
              </Tipografia>
              <div style={{ textAlign: "center", padding: "1.5rem" }}>
                <BotaoEstilizado>Login</BotaoEstilizado>
              </div>
            </form>

            <hr></hr>
            <div style={{ textAlign: "center", color: "#373737" }}>
              <Row justify="center">
                <Col lg={10} md={10} sm={12}>
                  <Tipografia componente="body2" variante="body2">
                    Ainda não criou sua conta no Freelando?
                  </Tipografia>
                  <Tipografia
                    componente="body2Bold"
                    variante="body2Bold"
                    onClick={() => navigate("/cadastro")}
                  >
                    Cadastre-se clicando aqui
                  </Tipografia>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Login;
