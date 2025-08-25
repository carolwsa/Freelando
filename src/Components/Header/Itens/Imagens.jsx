import styled from "@emotion/styled";

const ImagensEstilizada = styled.img`
  width: ${(props) =>
    props.tipo === "logo"
      ? "230px"
      : props.tipo === "perfil"
      ? "64px"
      : props.tipo === "logo2"
      ? "176.06"
      : "32px"};
  height: ${(props) =>
    props.tipo === "logo"
      ? "48px"
      : props.tipo === "perfil"
      ? "64px"
      : props.tipo === "logo2"
      ? "40px"
      : "32px"};
`;

export const Imagens = ({ children, tipo }) => {
  return <ImagensEstilizada src={children} tipo={tipo} />;
};
