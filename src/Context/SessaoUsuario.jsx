import { createContext, useContext, useState } from "react";
import http from "../Http";
import { ArmazenadorToken } from "../Utils/ArmazenadorToken";

export const SessaoUsuarioContext = createContext({
  usuarioEstaLogado: false,
  login: () => null,
  logout: () => null,
  perfil: {},
  cadastroConcluido: false,
  setCadastroConcluido: () => null,
});

export const useSessaoUsuarioContext = () => {
  return useContext(SessaoUsuarioContext);
};

export const SessaoUsuarioProvider = ({ children }) => {
  const [cadastroConcluido, setCadastroConcluido] = useState(false);

  const login = async ({ email, senha }) => {
    try {
      const resposta = await http.post("/auth/login", { email, senha });

      ArmazenadorToken.definirTokens(
        resposta.data.access_token,
        resposta.data.refresh_token
      );
      setCadastroConcluido(true);
      console.log(cadastroConcluido);

      return true; // Login bem-sucedido
    } catch (erro) {
      console.error("Erro ao fazer login:", erro);
      return false; // Login falhou
    }
  };

  const value = { login, cadastroConcluido, setCadastroConcluido };
  return (
    <SessaoUsuarioContext.Provider value={value}>
      {children}
    </SessaoUsuarioContext.Provider>
  );
};
