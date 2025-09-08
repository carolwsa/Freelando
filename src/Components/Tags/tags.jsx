import styled from "@emotion/styled";

const TagsEstilizadas = styled.button`
  border: 1.5px solid #373737;
  font-size: 1rem;
  background-color: #f5f5f5;
  padding: 0.8rem;
  color: #373737;
  border-radius: 20px;
  margin: 1rem;
`;

const Tags = ({ children }) => {
  return <TagsEstilizadas>{children}</TagsEstilizadas>;
};

export default Tags;
