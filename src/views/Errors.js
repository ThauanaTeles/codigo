import React from "react";
import { Container, Button } from "shards-react";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>404</h2>
        <h3>not found</h3>
        <p>Ops, página não encontrada!</p>
        <Button pill>&larr; Go Back</Button>
      </div>
    </div>
  </Container>
);

export default Errors;
