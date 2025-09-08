import styled from "@emotion/styled";
import { Imagens } from "./Itens/Imagens";
import { Links } from "./Itens/Links";
import img from "../../IMG/freelando.png";
import perfil from "../../IMG/perfil.png";
import { useSessaoUsuarioContext } from "../../Context/SessaoUsuario";
import { useNavigate } from "react-router-dom";

const HeaderEstilizado = styled.header`
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.m};
  color: #f5f5f5;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .content {
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    gap: 45px;
    align-items: center;
  }
`;

export const Header = () => {
  const { cadastroConcluido } = useSessaoUsuarioContext();
  const nav = useNavigate();

  return (
    <>
      {!cadastroConcluido && (
        <HeaderEstilizado>
          <div className="img">
            <Imagens children={img} tipo={"logo"} />
          </div>
          <div className="content">
            <Links children={"Login"} tipo={"login"} />
          </div>
        </HeaderEstilizado>
      )}
      {cadastroConcluido && (
        <HeaderEstilizado>
          <div className="img">
            <Imagens children={img} tipo={"logo"} />
          </div>
          <div className="content">
            <Links children={"Contrate"} link={"#"} />
            <Links children={"Encontre Trabalho"} link={"#"} />
            <Links children={"Meus projetos"} link={"#"} />
            <Imagens
              children={perfil}
              tipo={"perfil"}
              onClick={() => nav("/area-logada/perfil")}
            />
          </div>
        </HeaderEstilizado>
      )}
    </>
  );
};
