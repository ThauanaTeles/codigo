import React from "react";
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
  Button
} from "shards-react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const CadastroCliente = ({ title }) => (
  <Formik
    initialValues={{
      nome: '',
      sobrenome: '',
      email: '',
      telefone: '',
      endereco: '',
      cidade: '',
      estado: '',
      numero: '',
      descricao: ''
    }}
    validationSchema={Yup.object().shape({
      nome: Yup.string()
        .required('Campo obrigatório'),
      sobrenome: Yup.string()
        .required('Campo obrigatório'),
      email: Yup.string()
        .email('Email inválido')
        .required('Email is required'),
      telefone: Yup.string()
        .min(6, 'Campo obrigatório')
        .required('Campo obrigatório'),
      endereco: Yup.string()
        .min(6, 'Campo obrigatório')
        .required('Campo obrigatório'),
      cidade: Yup.string()
        .min(6, 'Campo obrigatório')
        .required('Campo obrigatório'),
      estado:  Yup.string()
        .min(6, 'Campo obrigatório')
        .required('Campo obrigatório'),
      numero: Yup.string()
        .min(2, 'Campo obrigatório')
        .required('Campo obrigatório'),
      descricao: Yup.string()
        .min(6, 'Campo obrigatório')
        .required('Campo obrigatório'),
    })}
    onSubmit={values => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 500);
    }}
        render={({ errors, status, touched, handleSubmit, values}) => (
          <Form onSubmit={handleSubmit}>
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
                            <label htmlFor="nome">Nome</label>
                            <Field name="nome" type="text" className={'form-control' + (errors.nome && touched.nome ? ' is-invalid' : '')}  value={values.nome} />
                            <ErrorMessage name="nome" component="div" />

                          </Col>
                          {/* Sobrenome */}
                          <Col md="6" className="form-group">
                            <label htmlFor="sobrenome">Sobrenome</label>
                            <Field name="sobrenome" type="text" className={'form-control' + (errors.sobrenome && touched.sobrenome ? ' is-invalid' : '')}  value={values.sobrenome} />
                            <ErrorMessage name="sobrenome" component="div"/>
                          </Col>
                        </Row>
                        <Row form>
                          {/* Email */}
                          <Col md="6" className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}  value={values.email} />
                            <ErrorMessage name="email" component="div"/>
                          </Col>
                          {/* Telefone */}
                          <Col md="6" className="form-group">
                            <label htmlFor="telefone">Telefone</label>
                            <Field name="telefone" type="text" className={'form-control' + (errors.telefone && touched.telefone ? ' is-invalid' : '')}  value={values.telefone}/>
                            <ErrorMessage name="telefone" component="div"/>
                          </Col>
                        </Row>
                        <FormGroup>
                          <label htmlFor="endereco">Endereço</label>
                          <Field name="endereco" type="text" className={'form-control' + (errors.endereco && touched.endereco ? ' is-invalid' : '')}  value={values.endereco}/>
                          <ErrorMessage name="endereco" component="div"/>
                        </FormGroup>
                        <Row form>
                          {/* Cidade */}
                          <Col md="6" className="form-group">
                            <label htmlFor="cidade">Cidade</label>
                            <Field name="cidade" type="text" className={'form-control' + (errors.cidade && touched.cidade ? ' is-invalid' : '')}  value={values.cidade}/>
                            <ErrorMessage name="cidade" component="div"/>
                          </Col>
                          {/* Estado */}
                          <Col md="4" className="form-group">
                            <label htmlFor="estado">Estado</label>
                            <Field name="estado" type="text" className={'form-control' + (errors.estado && touched.estado ? ' is-invalid' : '')}  value={values.estado}/>
                            <ErrorMessage name="estado" component="div"/>
                          </Col>
                          {/* Número */}
                          <Col md="2" className="form-group">
                            <label htmlFor="numero">Número</label>
                            <Field name="numero" type="text" className={'form-control' + (errors.numero && touched.numero ? ' is-invalid' : '')}  value={values.numero}/>
                            <ErrorMessage name="numero" component="div"/>
                          </Col>
                        </Row>
                        <Row form>
                          {/* Descrição */}
                          <Col md="12" className="form-group">
                            <label htmlFor="feDescription">Descrição</label>
                            <FormTextarea id="feDescription" rows="5" />
                          </Col>
                        </Row>
                        <Button type="submit" theme="accent">Cadastrar</Button>

                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Form>
    )}
  />
);

CadastroCliente.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

CadastroCliente.defaultProps = {
  title: "Cadastro de Cliente:"
};

export default CadastroCliente;
