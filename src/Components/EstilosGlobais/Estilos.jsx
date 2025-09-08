import { Global } from "@emotion/react";

const estilos = (tema) => {
  return {
    html: {
      fontFamily: tema.fonte,
    },
    body: {
      margin: 0,
      padding: 0,

      boxSizing: "border-box",
      width: "100%",
      maxWidth: "100vw",
    },
  };
};

export const Estilos = () => {
  return <Global styles={estilos}></Global>;
};
