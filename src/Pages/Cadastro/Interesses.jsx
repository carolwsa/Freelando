import { Tipografia } from "../../Components/Tipografia/Tipografia";
import GrupoRadio from "../../Components/RadioButton/GrupoRadio";
// import { useState } from "react";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../Components/Botao/Botao";
import { Link, useNavigate } from "react-router-dom";
import { useCadastroUsuarioContext } from "../../Context/CadastroUsuario";
import { useEffect } from "react";

const opcoes = [
  {
    valor: 1,
    label: "TI e Programação",
  },
  {
    valor: 2,
    label: "Design e Multimídia",
  },
  {
    valor: 3,
    label: "Revisão",
  },
  {
    valor: 4,
    label: "Tradução",
  },
  {
    valor: 5,
    label: "Transcrição",
  },
  {
    valor: 6,
    label: "Marketing",
  },
];

const Interesses = () => {
  // const [opcao, setOpcao] = useState("");
  const { usuario, setInteresse, possoSelecionarinteresse } =
    useCadastroUsuarioContext();
  const navegar = useNavigate();

  useEffect(() => {
    if (!possoSelecionarinteresse()) {
      navegar("/cadastro");
    }
  });

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    if (usuario.interesse === null) {
      alert("Selecione pelo menos um interesse!");
      return;
    }
    navegar("/cadastro/dados-pessoais");
  };

  return (
    <form style={{ textAlign: "center" }} onSubmit={aoSubmeter}>
      <Tipografia variante="h1" componente="h1">
        Crie seu cadastro
      </Tipografia>
      <Tipografia variante="h3" componente="h2">
        Qual sua área de interesse?
      </Tipografia>
      <GrupoRadio
        opcoes={opcoes}
        valor={usuario.interesse}
        onChange={setInteresse}
      />
      <Row>
        <Col lg={6} md={6} sm={6}>
          <Link to="/cadastro">
            <Botao variante="secundaria">Anterior</Botao>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Botao tipo="submit">Próxima</Botao>
          </div>
        </Col>
      </Row>
    </form>
  );
};

export default Interesses;
