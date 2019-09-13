import React, { useState, useEffect } from "react";
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
import '../../shards-dashboard/styles/scss/client.scss';
import '../boletos/GerarBoletos';
import InputCustom from '../custom/InputCustom';

const CadastroCliente = ({ title }) => {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [endereco, setEndereco] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  const [numero, setNumero] = useState("")
  const [descricao, setDescricao] = useState("")

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    addressNumber: "",
    description: ""
  };
  
  const validationSchema = Yup.object().shape({
    nome: Yup.string()
    .required('Campo obrigatório'),
    sobrenome: Yup.string()
    .required('Campo obrigatório'),
    email: Yup.string()
    .email('Email inválido')
    .required('Email is required'),
    telefone: Yup.string()
    .min(6, 'Mínimo 6 números')
    .required('Campo obrigatório'),
    endereco: Yup.string()
    .min(6, 'Mínimo 6 caracteres')
    .required('Campo obrigatório'),
    cidade: Yup.string()
    .min(6, 'Mínimo 6 caracteres')
    .required('Campo obrigatório'),
    estado: Yup.string()
    .min(6, 'Mínimo 6 caracteres')
    .required('Campo obrigatório'),
    numero: Yup.string()
    .min(2, 'Mínimo 2 números')
    .required('Campo obrigatório'),
    descricao: Yup.string()
    .min(6, 'Mínimo 6 caracteres')
    .max(100, 'Máximo 100 caracteres')
  });

  return (
    <Formik
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2))
          actions.setSubmitting(false);
        }, 1000);
      }}
      initialValues={initialValues}
      validationSchema={validationSchema}
      render={({ errors, status, touched, handleSubmit, values, handleChange }) => (
        <Form onSubmit={handleSubmit} >
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
                      <InputCustom tamanho="6" labelName="Nome" change={handleChange, e => setNome(e.target.value)} erro={errors.nome} id="nome" alterado={touched.nome} valor={nome} />

                      {/* Sobrenome */}
                      <InputCustom tamanho="6" labelName="Sobrenome" change={handleChange, e => setSobrenome(e.target.value)} erro={errors.sobrenome} id="sobrenome" alterado={touched.sobrenome} valor={sobrenome} />
                    </Row>

                    <Row form>
                      {/* Email */}
                      <Col md="6" className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                          value={email}
                          onChange={handleChange, e => setEmail(e.target.value)}
                        />
                        <ErrorMessage name="email" component="div" />
                      </Col>
                      {/* Telefone */}
                      <Col md="6" className="form-group">
                        <label htmlFor="telefone">Telefone</label>
                        <Field name="telefone" type="text" className={'form-control' + (errors.telefone && touched.telefone ? ' is-invalid' : '')}
                          value={telefone}
                          onChange={handleChange, e => setTelefone(e.target.value)}
                        />
                        <ErrorMessage name="telefone" component="div" />
                      </Col>
                    </Row>
                    <FormGroup>
                      <label htmlFor="endereco">Endereço</label>
                      <Field name="endereco" type="text" className={'form-control' + (errors.endereco && touched.endereco ? ' is-invalid' : '')}
                        value={endereco}
                        onChange={handleChange, e => setEndereco(e.target.value)}
                      />
                      <ErrorMessage name="endereco" component="div" />
                    </FormGroup>
                    <Row form>
                      {/* Cidade */}
                      <Col md="6" className="form-group">
                        <label htmlFor="cidade">Cidade</label>
                        <Field name="cidade" type="text" className={'form-control' + (errors.cidade && touched.cidade ? ' is-invalid' : '')}
                          value={cidade}
                          onChange={handleChange, e => setCidade(e.target.value)}
                        />
                        <ErrorMessage name="cidade" component="div" />
                      </Col>
                      {/* Estado */}
                      <Col md="4" className="form-group">
                        <label htmlFor="estado">Estado</label>
                        <Field name="estado" type="text" className={'form-control' + (errors.estado && touched.estado ? ' is-invalid' : '')}
                          value={estado}
                          onChange={handleChange, e => setEstado(e.target.value)}
                        />
                        <ErrorMessage name="estado" component="div" />
                      </Col>
                      {/* Número */}
                      <Col md="2" className="form-group">
                        <label htmlFor="numero">Número</label>
                        <Field name="numero" type="text" className={'form-control' + (errors.numero && touched.numero ? ' is-invalid' : '')}
                          value={numero}
                          onChange={handleChange, e => setNumero(e.target.value)}
                        />
                        <ErrorMessage name="numero" component="div" />
                      </Col>
                    </Row>
                    <Row form>
                      {/* Descrição */}
                      <Col md="12" className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <FormTextarea id="descricao" type="text" rows="5" name="descricao" value={descricao} onChange={handleChange, e => setDescricao(e.target.value)} />
                      </Col>
                    </Row>
                    <Button type="submit" theme="accent">Cadastrar</Button>
                    <Button href="./Boletos" id="gerar-boleto" outline theme="success">Gerar Boleto</Button>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Form >
      )}
    />
  );
}


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
