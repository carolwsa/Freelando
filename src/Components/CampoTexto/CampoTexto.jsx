import styled from "@emotion/styled";

const LabelEstilizada = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin: ${(props) => props.theme.espacamentos.xs} 0;
`;

const InputEstilizado = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin: ${(props) => props.theme.espacamentos.xs} 0;
  background: ${(props) => props.theme.cores.branco};
  border: 1px solid;
  border-color: ${(props) => props.theme.cores.neutras.a};
  border-radius: ${(props) => props.theme.espacamentos.s};
  height: 34px;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  padding-left: ${(props) => props.theme.espacamentos.s};
`;
export const CampoTexto = ({ label, valor, onChange, tipo = "text" }) => {
  return (
    <LabelEstilizada>
      {label}
      <InputEstilizado
        value={valor}
        onChange={(evento) => onChange(evento.target.value)}
        type={tipo}
      />
    </LabelEstilizada>
  );
};
