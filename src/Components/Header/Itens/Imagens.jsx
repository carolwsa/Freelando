import styled from "@emotion/styled";

const ImagensEstilizada = styled.img`
  width: ${(props) =>
    props.tipo === "logo"
      ? "237px"
      : props.tipo === "perfil"
      ? "45px"
      : props.tipo === "logo2"
      ? "176.06px"
      : props.tipo === "icons"
      ? "32px"
      : props.tipo === "opcoes"
      ? "72px"
      : ""};
  height: ${(props) =>
    props.tipo === "logo"
      ? "46px"
      : props.tipo === "perfil"
      ? "45px"
      : props.tipo === "logo2"
      ? "40px"
      : props.tipo === "icons"
      ? "32px"
      : props.tipo === "opcoes"
      ? "72px"
      : ""};

  padding-right: ${(props) =>
    props.tipo === "icons" ? props.theme.espacamentos.xs : 0};

  cursor: ${(props) => (props.tipo === "perfil" ? "pointer" : "default")};
`;

export const Imagens = ({ children, tipo, onClick }) => {
  return (
    <ImagensEstilizada
      src={children}
      tipo={tipo}
      onClick={onClick}
      alt="Imagens para composição do site"
    />
  );
};
