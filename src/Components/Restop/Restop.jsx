import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Restop({op}) {
    console.log(op);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <div>
              <Button variant="primary" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Resturant Timing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
        <ListGroup.Item><b>Monday: </b>{op?.Monday}</ListGroup.Item>
        <ListGroup.Item><b>Tuesday:</b> {op?.Tuesday}</ListGroup.Item>
        <ListGroup.Item><b>Wednesday:</b> {op?.Wednesday}</ListGroup.Item>
        <ListGroup.Item><b>Thursday:</b> {op?.Thursday}</ListGroup.Item>
        <ListGroup.Item><b>Friday:</b> {op?.Friday}</ListGroup.Item>
        <ListGroup.Item><b>Saturday:</b> {op?.Saturday}</ListGroup.Item>
        <ListGroup.Item style={{color:"red"}}><b>Sunday:</b> {op?.Sunday}</ListGroup.Item>
        </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='btn btn-danger' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Restop