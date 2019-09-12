import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import GerarBoletos from "../components/boletos/GerarBoletos";

const Boletos = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Gerar Boletos" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="10">
        <GerarBoletos />
      </Col>
      <Col lg="2">

    </Col>
    </Row>
  </Container>
);

export default Boletos;
