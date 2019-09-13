import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, FormSelect } from "shards-react";

import HeaderTitle from "../../components/common/PageTitle";

import '../../shards-dashboard/styles/scss/client.scss';


class GerarBoletos extends React.Component {
  render(){
    return (
      <Container fluid className="main-content-container px-4" id="table-boletos">
        {/* Page Header */}

        <Col md="4" className="form-group" id="filtro">
          <FormSelect id="feInputState">
          <option>Opção 1 </option>
          <option>Opção 2</option>
          <option>Opção 3</option>
          <option>Opção 4</option>
          </FormSelect>
        </Col>

        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Listagem de todos os clientes:</h6>
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

export default GerarBoletos;
