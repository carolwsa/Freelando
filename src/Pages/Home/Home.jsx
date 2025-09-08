import { Imagens } from "../../Components/Header/Itens/Imagens";
import { Tipografia } from "../../Components/Tipografia/Tipografia";
import banner from "./assets/Imagens.png";
import icons1 from "./assets/icons1.svg";
import icons2 from "./assets/icons2.svg";
import icons3 from "./assets/icons3.svg";
import icons4 from "./assets/icons4.svg";
import icons2_1 from "./assets/icons2.1.svg";
import icons2_2 from "./assets/icons2.2.svg";
import icons2_3 from "./assets/icons2.3.svg";
import icons2_4 from "./assets/icons2.4.svg";
import Tags from "../../Components/Tags/tags";
import styled from "@emotion/styled";
import { Header } from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";

const habilidades = [
  "Design",
  "Branding",
  "Ilustração",
  "Marketing",
  "identidade Visual",
  "SEO",
  "Redação",
  "Transcrição",
  "Revisão",
  "Tradução",
  "E-books",
  "ABNT",
  "Programação",
  "API",
  "Desenvolvimento de Aplicativo",
  "Desenvolvimento de Websites",
];

const SectionEstilizada = styled.section`
  text-align: left;
  color: #d93114;
  background-image: url(${banner});
  background-position: right;
  background-repeat: no-repeat;
  background-size: 658px 423px;
  height: 600px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
`;

const DivEstilizada = styled.div`
  width: 500px;
  margin-left: 4rem;

  button {
    background-color: #d93114;
    color: white;
    font-size: 1.1rem;
    border-radius: 20px;
    margin-top: 3rem;
    padding: 0.9rem 1.5rem;
    border: none;
  }

  button:hover {
    background-color: #b61b00;
  }
`;

const SectionOpcoesEstilizada = styled.section`
  text-align: center;
  margin-top: 6rem;
`;

const SectionOpcoesEstilizada2 = styled.section`
  text-align: center;
  width: 80%;
  margin: 6rem auto;
`;
const DivOpcoesEstilizada = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 2rem;

  div {
    background-color: #ebeaf9;
    padding: 1rem 0;
    border-radius: 20px;
  }
`;

const DivOpcoesEstilizada2 = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1198px;
  margin: 0 auto;

  div {
    width: 46%;
    display: flex;
    gap: 20px;
    background-color: #ebfcf9;
    padding: 1rem;
    border-radius: 20px;
    align-items: center;
  }
`;

const Home = () => {
  const navegar = useNavigate();

  return (
    <>
      <Header />
      <SectionEstilizada>
        <DivEstilizada>
          <Tipografia variante="h12" componente="h1">
            Uma ponte entre os freelas mais talentosos e os projetos mais
            interessantes!
          </Tipografia>
          <button onClick={() => navegar("/cadastro")}>
            Quero me cadastrar!
          </button>
        </DivEstilizada>
      </SectionEstilizada>

      <SectionOpcoesEstilizada>
        <Tipografia variante="h2" componente="h2">
          Vantagens para contratantes
        </Tipografia>
        <DivOpcoesEstilizada>
          <div>
            <Imagens children={icons1} tipo={"opcoes"} />
            <Tipografia variante="h3" componente="h3">
              Profissionais qualificados
            </Tipografia>
          </div>

          <div>
            <Imagens children={icons2} tipo={"opcoes"} />
            <Tipografia variante="h3" componente="h3">
              Múltiplas especialidades
            </Tipografia>
          </div>

          <div>
            <Imagens children={icons3} tipo={"opcoes"} />
            <Tipografia variante="h3" componente="h3">
              Atendimento e agilidade
            </Tipografia>
          </div>

          <div>
            <Imagens children={icons4} tipo={"opcoes"} />
            <Tipografia variante="h3" componente="h3">
              Simplicidade e Segurança
            </Tipografia>
          </div>
        </DivOpcoesEstilizada>
      </SectionOpcoesEstilizada>

      <SectionOpcoesEstilizada>
        <Tipografia variante="h2" componente="h2">
          Vantagens para freelas
        </Tipografia>
        <DivOpcoesEstilizada2>
          <div>
            <Imagens children={icons2_1} tipo={"opcoes"} />
            <Tipografia variante="h3" componente="h3">
              Clientes verificados
            </Tipografia>
          </div>

          <div>
            <Imagens children={icons2_2} tipo={"opcoes"} />
            <Tipografia variante="h3" componente="h3">
              Atendimento e agilidade
            </Tipografia>
          </div>

          <div>
            <Imagens children={icons2_3} tipo={"opcoes"} />
            <Tipografia variante="h3" componente="h3">
              Projetos interessantes
            </Tipografia>
          </div>

          <div>
            <Imagens children={icons2_4} tipo={"opcoes"} />
            <Tipografia variante="h3" componente="h3">
              Remuneração supervisionada
            </Tipografia>
          </div>
        </DivOpcoesEstilizada2>
      </SectionOpcoesEstilizada>

      <SectionOpcoesEstilizada2>
        <Tipografia variante="h2" componente="h2">
          Quais habilidades você encontra por aqui?
        </Tipografia>
        {habilidades.map((habilidade) => (
          <Tags>{habilidade}</Tags>
        ))}
      </SectionOpcoesEstilizada2>
    </>
  );
};

export default Home;
