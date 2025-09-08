import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../Http";

const usuarioInicial = {
  perfil: "",
  interesse: "",
  nomeCompleto: "",
  uf: "",
  cidade: "",
  email: "",
  senha: "",
  senhaConfirmada: "",
};

export const CadastroUsuarioContext = createContext({
  usuario: usuarioInicial,
  setPerfil: () => null,
  setInteresse: () => null,
  setNomeCompleto: () => null,
  setUf: () => null,
  setCidade: () => null,
  setEmail: () => null,
  setSenha: () => null,
  setSenhaConfirmada: () => null,
  submeterUsuario: () => null,
  possoSelecionarinteresse: () => null,
});

export const useCadastroUsuarioContext = () => {
  return useContext(CadastroUsuarioContext);
};

export const CadastroUsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(usuarioInicial);
  const navegar = useNavigate();

  const setPerfil = (perfil) => {
    setUsuario((estadoAnterior) => {
      return {
        ...estadoAnterior,
        perfil,
      };
    });
  };

  const setInteresse = (interesse) => {
    setUsuario((estadoAnterior) => {
      return {
        ...estadoAnterior,
        interesse,
      };
    });
  };

  const setNomeCompleto = (nomeCompleto) => {
    setUsuario((estadoAnterior) => {
      return {
        ...estadoAnterior,
        nomeCompleto,
      };
    });
  };

  const setUf = (Uf) => {
    setUsuario((estadoAnterior) => {
      return {
        ...estadoAnterior,
        Uf,
      };
    });
  };

  const setCidade = (cidade) => {
    setUsuario((estadoAnterior) => {
      return {
        ...estadoAnterior,
        cidade,
      };
    });
  };

  const setEmail = (email) => {
    setUsuario((estadoAnterior) => {
      return {
        ...estadoAnterior,
        email,
      };
    });
  };

  const setSenha = (senha) => {
    setUsuario((estadoAnterior) => {
      return {
        ...estadoAnterior,
        senha,
      };
    });
  };

  const setSenhaConfirmada = (senhaConfirmada) => {
    setUsuario((estadoAnterior) => {
      return {
        ...estadoAnterior,
        senhaConfirmada,
      };
    });
  };

  const submeterUsuario = () => {
    http
      .post("auth/register", usuario)
      .then(() => {
        navegar("/cadastro/concluido");
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
    if (usuario.senha.length < 8) {
      alert("Insira pelo menos 8 caracteres na senha!");
      return;
    }
  };

  const possoSelecionarinteresse = () => {
    return !!usuario.perfil;
  };

  const contexto = {
    usuario,
    setPerfil,
    setNomeCompleto,
    setInteresse,
    setUf,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada,
    submeterUsuario,
    possoSelecionarinteresse,
  };

  return (
    <CadastroUsuarioContext.Provider value={contexto}>
      {children}
    </CadastroUsuarioContext.Provider>
  );
};
