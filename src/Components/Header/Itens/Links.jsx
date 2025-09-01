import styled from "@emotion/styled";

const LinksEstilizados = styled.a`
  text-decoration: none;
  color: ${(props) => (props.tipo === "login" ? "#D93114" : "inherit")};
  cursor: pointer;

  :hover {
    color: ${(props) => (props.tipo === "login" ? "#B61B00" : "#110EA0")};
    text-decoration: ${(props) =>
      props.tipo === "login" ? "underline" : "none"};
    font-weight: ${(props) => (props.tipo === "login" ? "700" : "500")};
  }
`;

export const Links = ({ children, link, tipo }) => {
  return (
    <LinksEstilizados href={link} tipo={tipo}>
      {children}
    </LinksEstilizados>
  );
};
