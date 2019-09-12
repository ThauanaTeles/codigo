import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import HeaderTitle from "./HeaderTitle";


class ListagemClientes extends React.Component {
  render(){
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <HeaderTitle sm="4" title="Listagem" subtitle="CLIENTES" className="text-sm-left" />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col>
              <Card small className="mb-4">
                <CardHeader className="border-bottom">
                  <h6 className="m-0">Título</h6>
                </CardHeader>
                <CardBody className="p-0 pb-3">
                  <table className="table mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th scope="col" className="border-0">
                          #
                        </th>
                        <th scope="col" className="border-0">
                          Nome
                        </th>
                        <th scope="col" className="border-0">
                          Sobrenome
                        </th>
                        <th scope="col" className="border-0">
                          E-mail
                        </th>
                        <th scope="col" className="border-0">
                          Cidade
                        </th>
                        <th scope="col" className="border-0">
                          Telefone
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {

                      }
                    </tbody>
                  </table>
                </CardBody>
              </Card>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default ListagemClientes;
