import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs={8} data-testid="grocery-list">Grocery List</Col>
          <Col xs={4} data-testid="control-panel">Control Panel</Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
