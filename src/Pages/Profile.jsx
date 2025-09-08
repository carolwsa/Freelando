import styled from "@emotion/styled";
import Label from "../Components/Label/Label";
import { Tipografia } from "../Components/Tipografia/Tipografia";
import Banner from "../IMG/banner_perfil.png";
import Perfil from "../IMG/perfil.png";
import { Header } from "../Components/Header/Header";
import { useEffect, useState } from "react";
import http from "../Http";
import { ArmazenadorToken } from "../Utils/ArmazenadorToken";
import { useSessaoUsuarioContext } from "../Context/SessaoUsuario";
import { useNavigate } from "react-router-dom";

const ContainerPersonalizado = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const SectionPersonalizada = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  max-width: 960px;
`;

const DivPersonalizada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;

  img {
    width: 176px;
    height: 176px;
  }

  button {
    align-self: center;
    background-color: red;
    color: white;
    font-weight: 600;
    font-size: 15px;
    padding: 0.75rem;
    margin-top: 1rem;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    width: 50%;

    :hover {
      background-color: #b61b00;
    }
  }
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;

  button {
    align-self: flex-start;
    background-color: #868686;
    color: white;
    font-weight: 600;
    font-size: 15px;
    padding: 0.75rem;
    margin-top: 1rem;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    width: 50%;

    :hover {
      background-color: #b61b00;
    }
  }
`;

const DivPersonalizada2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

const HeaderCostumizada = styled.header`
  img {
    width: 100%;
  }
`;

const Profile = () => {
  const nav = useNavigate();
  const { setCadastroConcluido } = useSessaoUsuarioContext();
  const [usuario, setUsuario] = useState({
    nome: "",
    sobrenome: "",
    celular: "",
    email: "",
    estado: "",
    cidade: "",
  });

  useEffect(() => {
    http
      .get("profile")
      .then((resposta) => {
        setUsuario({
          nome: resposta.data.nomeCompleto,
          sobrenome: resposta.data.nomeCompleto,
          email: resposta.data.email,
          cidade: resposta.data.cidade,
          estado: resposta.data.Uf,
        });
      })
      .catch((erro) => console.error(erro));
  }, [usuario]);

  const aoSubmeterForm = (evento) => {
    evento.preventDefault();
  };

  return (
    <>
      <Header />
      <HeaderCostumizada>
        <img src={Banner} alt="Imagem de uma pessoa digitando e um notebook" />
      </HeaderCostumizada>

      <ContainerPersonalizado>
        <SectionPersonalizada>
          <DivPersonalizada>
            <Tipografia componente="h2" variante="h2">
              {usuario.nome}
            </Tipografia>
            <img src={Perfil} alt="Icone de perfil" />
            <button
              onClick={() => {
                ArmazenadorToken.efetuarLogout();
                setCadastroConcluido(false);
                nav("/login");
              }}
            >
              Logout
            </button>
          </DivPersonalizada>

          <Formulario onSubmit={aoSubmeterForm}>
            <Tipografia componente="h2" variante="h2">
              Revise seus dados
            </Tipografia>
            <Label
              children="Nome"
              onChange={(e) => e.target.value}
              placeholder={usuario.nome}
              tipo="text"
              valor={usuario.nome}
            ></Label>
            <Label
              children="Sobrenome"
              onChange={(e) => e.target.value}
              placeholder={usuario.sobrenome}
              tipo="text"
              valor={usuario.sobrenome}
            ></Label>

            <DivPersonalizada2>
              <Label
                children="Email"
                onChange={(e) => e.target.value}
                placeholder={usuario.email}
                tipo="email"
                valor={usuario.email}
              ></Label>
            </DivPersonalizada2>
            <DivPersonalizada2>
              <Label
                children="Estado"
                onChange={(e) => e.target.value}
                placeholder={usuario.estado}
                tipo="text"
                valor={usuario.estado}
              ></Label>
              <Label
                children="Cidade"
                onChange={(e) => e.target.value}
                placeholder={usuario.cidade}
                tipo="text"
                valor={usuario.cidade}
              ></Label>
            </DivPersonalizada2>
            <button>Salvar</button>
          </Formulario>
        </SectionPersonalizada>
      </ContainerPersonalizado>
    </>
  );
};

export default Profile;
