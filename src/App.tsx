import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ControlPanel from './components/Panel';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid className='h-100'>
        <Row className="h-100">
          <Col xs={8} data-testid="grocery-list" className='bg-warning'>Grocery List</Col>
          <ControlPanel />
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
