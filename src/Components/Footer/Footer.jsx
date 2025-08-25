import { Imagens } from "../Header/Itens/Imagens";
import { Links } from "../Header/Itens/Links";
import img from "../../IMG/freelando.png";
import whats from "../../IMG/whats.png";
import twitch from "../../IMG/twitch.png";
import insta from "../../IMG/insta.png";
import tt from "../../IMG/twiter.png";
import styled from "@emotion/styled";

export const Rodape = styled.footer`
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.xs};
  color: ${(props) => props.theme.cores.branco};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .descContainer,
  .iconsContainer {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 36px ${(props) => props.theme.espacamentos.xl};
  }
`;

export const Footer = () => {
  return (
    <Rodape>
      <div className="descContainer">
        <Imagens children={img} tipo={"logo2"}></Imagens>
        <Links
          children={
            "Desenvolvido por Ana. Projeto fictício sem fins comerciais."
          }
          link={"#"}
        ></Links>
      </div>
      <div className="iconsContainer">
        <Links children={"Acesse nossas redes:"} link={"#"}></Links>
        <div className="icons">
          <Imagens children={whats} tipo={"icons"}></Imagens>
          <Imagens children={twitch} tipo={"icons"}></Imagens>
          <Imagens children={insta} tipo={"icons"}></Imagens>
          <Imagens children={tt} tipo={"icons"}></Imagens>
        </div>
      </div>
    </Rodape>
  );
};
