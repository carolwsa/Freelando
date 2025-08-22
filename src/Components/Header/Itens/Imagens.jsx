import styled from "@emotion/styled";

const ImagensEstilizada = styled.img`
  width: ${(props) => (props.tipo === "logo" ? "230px" : "64px")};
  height: ${(props) => (props.tipo === "logo" ? "48px" : "64px")};
`;

export const Imagens = ({ children, tipo }) => {
  return <ImagensEstilizada src={children} tipo={tipo} />;
};
