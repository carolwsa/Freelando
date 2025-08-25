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
  padding: ${(props) => props.theme.espacamentos.xl};
  color: ${(props) => props.theme.cores.branco};
  display: flex;
  justify-content: space-between;
`;

export const Footer = () => {
  return (
    <Rodape>
      <div>
        <Imagens children={img} tipo={"logo2"}></Imagens>
        <Links
          children={
            "Desenvolvido por Ana. Projeto fictício sem fins comerciais."
          }
          link={"#"}
        ></Links>
      </div>
      <div>
        <Links children={"Acesse nossas redes:"} link={"#"}></Links>
        <Imagens children={whats}></Imagens>
        <Imagens children={twitch}></Imagens>
        <Imagens children={insta}></Imagens>
        <Imagens children={tt}></Imagens>
      </div>
    </Rodape>
  );
};
