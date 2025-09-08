import styled from "@emotion/styled";

const LabelEstilizada = styled.label`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  input {
    padding: 0.8rem;
    margin: 0.5rem 0;
    border-radius: 20px;
    border: 1px solid #373737;
  }
`;

const Label = ({ children, placeholder, tipo, valor, onChange }) => {
  return (
    <LabelEstilizada>
      {children}
      <input
        type={tipo}
        placeholder={placeholder}
        value={valor}
        onChange={onChange}
      />
    </LabelEstilizada>
  );
};

export default Label;
