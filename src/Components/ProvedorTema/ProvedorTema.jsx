import { ThemeProvider } from "@emotion/react";

const tema = {
  cores: {
    branco: "#FFFFFF",
    atencao: "",
    focus: "#B009FF",
    primarias: {
      a: "#5754ED",
      b: "#D93114",
      c: "",
    },
    secundarias: {
      a: "#F8F8FD",
      b: "",
      c: "",
    },

    neutras: {
      a: "#373737",
      b: "#E8E8E8",
      c: "",
      d: "",
    },
    dark: {
      a: "",
      b: "#B61B00",
    },
  },

  espacamentos: {
    xs: "8px",
    s: "16px",
    l: "32px",
    xl: "80px",
  },

  fonte: "'Montserrat', sans-serif",
};

export const ProvedorTema = ({ children }) => {
  return <ThemeProvider theme={tema}>{children}</ThemeProvider>;
};
