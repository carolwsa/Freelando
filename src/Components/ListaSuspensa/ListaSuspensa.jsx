import styled from "@emotion/styled";
import { useState } from "react";

const LabelEstilizada = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  position: relative;
  z-index: 0;
  margin-top: 9px;
`;

const BotaoEstilizado = styled.button`
  cursor: pointer;
  display: block;
  height: 34px;
  width: 100%;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  border-radius: 18px;
  border-bottom-left-radius: ${(props) => (props.estaAberta ? "0" : "18px")};
  border-bottom-right-radius: ${(props) => (props.estaAberta ? "0" : "18px")};
  margin-top: 7px;
  padding: ${(props) => props.theme.espacamentos.s};
  background: ${(props) => props.theme.cores.branco};
  border: 1px solid ${(props) => props.theme.cores.neutras.a};
  &:focus {
    border-color: ${(props) => props.theme.cores.focus};
  }
`;

const UlEstilizada = styled.ul`
  padding: 0;
  margin: 0;
  border: 1px solid ${(props) => props.theme.cores.focus};
  border-radius: 0 0 18px 18px;
  list-style: none;
  max-width: 300px;
  max-height: 160px;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const LiEstilizada = styled.li`
  padding: 12px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid ${(props) => props.theme.cores.focus};
  background-color: ${(props) => props.theme.cores.branco};

  &:last-child {
    border-bottom: none;
    border-radius: 0 0 18px 18px;
  }

  color: ${(props) => (props.focoAtivo ? props.theme.cores.focus : "inherit")};

  &:hover {
    background-color: ${(props) => props.theme.cores.neutras.b};
  }
`;

export const ListaSuspensa = ({ titulo, opcoes }) => {
  const [estaAberta, alternarVisibilidade] = useState(false);

  const [opcaoFocada, setOpcaofocada] = useState(null);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  const manipularTecla = (evento) => {
    alternarVisibilidade(true);
    switch (evento.key) {
      case "ArrowDown":
        evento.preventDefault();
        setOpcaofocada((focoAntigo) => {
          if (focoAntigo == null) {
            return 0;
          }
          if (focoAntigo === opcoes.length - 1) {
            return opcoes.length - 1;
          }
          return (focoAntigo += 1);
        });
        break;
      case "ArrowUp":
        evento.preventDefault();
        setOpcaofocada((focoAntigo) => {
          if (!focoAntigo) {
            return 0;
          }
          return (focoAntigo -= 1);
        });
        break;
      case "Enter":
        evento.preventDefault();
        setOpcaofocada(null);
        alternarVisibilidade(false);
        setOpcaoSelecionada(opcoes[opcaoFocada]);
        break;
      case "Tab":
      case "Escape":
        evento.preventDefault();
        setOpcaofocada(null);
        alternarVisibilidade(false);
        break;

      default:
        break;
    }
  };

  return (
    <LabelEstilizada>
      {titulo}
      <BotaoEstilizado
        estaAberta={estaAberta}
        onClick={() => alternarVisibilidade(!estaAberta)}
        onKeyDown={manipularTecla}
      >
        <div>{opcaoSelecionada ? opcaoSelecionada.text : "Selecione"}</div>
        <div>
          <span>{estaAberta ? "▲" : "▼"}</span>
        </div>
      </BotaoEstilizado>
      {estaAberta && (
        <UlEstilizada>
          {opcoes.map((opcao, index) => (
            <LiEstilizada
              key={opcao.value}
              focoAtivo={index === opcaoFocada}
              onClick={() => setOpcaoSelecionada(opcao)}
            >
              {" "}
              {opcao.text}{" "}
            </LiEstilizada>
          ))}
        </UlEstilizada>
      )}
    </LabelEstilizada>
  );
};
