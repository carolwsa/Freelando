import { Col, Row } from "react-grid-system";
import { Card } from "../../Components/Card/Card";
import { Outlet } from "react-router-dom";
import { CadastroUsuarioProvider } from "../../Context/CadastroUsuario";
import { Header } from "../../Components/Header/Header";

const LayoutBase = () => {
  return (
    <CadastroUsuarioProvider>
      <Header />
      <Row justify="center">
        <Col
          xxx={6}
          xxl={6}
          xl={6}
          lg={6}
          md={8}
          sm={12}
          style={{ margin: "80px 0" }}
        >
          <Card>
            <Outlet />
          </Card>
        </Col>
      </Row>
    </CadastroUsuarioProvider>
  );
};

export default LayoutBase;
