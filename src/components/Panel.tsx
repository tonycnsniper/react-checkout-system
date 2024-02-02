import React, { useState } from 'react';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Void from './Void'

function ControlPanel() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const hanldeShow = () => setShow(true);

    return (
        <>
          <Col xs={4} data-testid="control-panel" className='bg-primary'>
            <h4>Control Panel</h4>
            <Button data-testid="checkout-login" variant="secondary" onClick={hanldeShow}>Login</Button>
            <Void />
            <Modal data-testid="login-modal" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                Input your Checkout ID
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Accept
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </>
    )
}

export default ControlPanel;