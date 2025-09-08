import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const LinksEstilizados = styled.a`
  text-decoration: none;
  color: ${(props) => (props.tipo === "login" ? "#cbcbcb" : "inherit")};
  cursor: pointer;

  :hover {
    color: ${(props) => (props.tipo === "login" ? "#110EA0" : "#110EA0")};
    text-decoration: ${(props) =>
      props.tipo === "login" ? "underline" : "none"};
    font-weight: ${(props) => (props.tipo === "login" ? "700" : "500")};
  }
`;

export const Links = ({ children, link, tipo }) => {
  const navegar = useNavigate();
  return (
    <LinksEstilizados
      href={link}
      tipo={tipo}
      onClick={() => (tipo === "login" ? navegar("/login") : navegar("/"))}
    >
      {children}
    </LinksEstilizados>
  );
};
