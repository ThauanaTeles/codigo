import React, {useState} from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  FormGroup,
  FormTextarea,
  Button,
  InputGroupText,
  InputGroupAddon
} from "shards-react";
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import '../../shards-dashboard/styles/scss/client.scss';


const GerarBoletos = ({ title }) => {
  return (

    <Formik
      const initialValues={{
        id_marketplace: '',
        id_boleto: ''
      }}
      validationSchema={Yup.object().shape({
        id_marketplace: Yup.string()
          .required('Campo obrigatório'),
        id_boleto: Yup.string()
          .required('Campo obrigatório'),
      })}


      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2))
          actions.setSubmitting(false);
        }, 1000);
      }}
          render={({ errors, status, touched, handleSubmit, values, actions, handleChange}) => (
            <Form onSubmit={handleSubmit} id="form-boletos">
              <Card small className="mb-4">
                <CardHeader className="border-bottom">
                  <h6 className="m-0">{title}</h6>
                </CardHeader>
                <ListGroup flush>
                  <ListGroupItem className="p-3">
                    <Row>
                      <Col>

                          <Row form>
                            {/* Nome */}
                            <Col md="6" className="form-group">
                              <label htmlFor="id_marketplace">ID do marketplace</label>
                              <Field name="id_marketplace" type="text" className={'form-control' + (errors.id_marketplace && touched.id_marketplace ? ' is-invalid' : '')}
                                value={values.id_marketplace}
                                onChange={handleChange}
                              />
                              <ErrorMessage name="id_marketplace" component="div" />

                            </Col>
                            {/* Sobrenome */}
                            <Col md="6" className="form-group">
                              <label htmlFor="id_boleto">Identificador do Boleto</label>
                              <InputGroupAddon type="prepend">
                                <InputGroupText><i className="fas fa-barcode"></i></InputGroupText>
                                <Field name="id_boleto" type="text" className={'form-control' + (errors.id_boleto && touched.id_boleto ? ' is-invalid' : '')}
                                  value={values.id_boleto}
                                  onChange={handleChange}
                                />
                              </InputGroupAddon>
                              <ErrorMessage name="id_boleto" component="div"/>
                            </Col>
                          </Row>
                          <Button id="button-boletos" theme="secondary" className="mb-2 mr-1">Gerar Boletos</Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Form>
          )}
    />
  );
}


GerarBoletos.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

GerarBoletos.defaultProps = {
  title: "Informe os dados:"
};

export default GerarBoletos;
