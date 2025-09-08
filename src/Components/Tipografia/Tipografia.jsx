import styled from "@emotion/styled";

const componentes = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  bodyBold: "strong",
  body2: "p",
  body2Bold: "strong",
  legenda: "p",
};

const estilos = {
  h1: `
        font-weight: 600;
        font-size: 40px;
        line-height: 49px;
        text-align: center;
        margin: 2px;
        margin-bottom: 20px;
    `,
  h12: `
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    text-align: left;
    margin: 2px;
`,
  h2: `
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
    `,
  h3: `
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
    `,
  body: `
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
    `,
  bodyBold: `
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
    `,
  body2: `
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
    `,
  body2Bold: `
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #D93114;
        text-decoration: underline;

        :hover {
        color: #B61B00;
        }
    `,
  legenda: `
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-align: right;
        text-decoration: underline;
        margin-top: 5px;
        color: #373737;
    `,
};

export const Tipografia = ({ variante, componente, children, onClick }) => {
  const tag = componentes[componente];
  const ComponenteUtilizado = styled[tag]`
    ${estilos[variante]}
  `;
  return (
    <ComponenteUtilizado onClick={onClick}>{children}</ComponenteUtilizado>
  );
};
