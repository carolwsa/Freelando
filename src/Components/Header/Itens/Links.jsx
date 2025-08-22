import styled from "@emotion/styled";

const LinksEstilizados = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  :hover {
    color: #110ea0;
  }
`;

export const Links = ({ children, link }) => {
  return <LinksEstilizados href={link}>{children}</LinksEstilizados>;
};
