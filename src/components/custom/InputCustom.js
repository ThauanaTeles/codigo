import React from "react";
import { Col } from "shards-react";
import { Field, ErrorMessage, Formik } from 'formik';
import '../../shards-dashboard/styles/scss/client.scss';
import '../boletos/GerarBoletos';

const InputCustom = props => {

  const {valor, tamanho, labelName, erro, alterado, id, change } = props

  return (
    <>
    <Formik 
    
    
    />
      <Col md={tamanho} className="form-group">
        <label htmlFor={id}>{labelName}</label>
        <Field name={id} type="text" className={'form-control' + (erro && alterado ? ' is-invalid' : '')}
          value={valor}
          onChange={change}
        />
        <ErrorMessage name={id} component="div" />

      </Col>
    </>
  )
}

export default InputCustom