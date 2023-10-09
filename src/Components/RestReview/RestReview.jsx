import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';


function RestReview({restreview}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(restreview);
  return (
    <div>
              <Button variant="primary" onClick={handleShow}>
              Review
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <i><b>Review</b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

         {restreview?.map((item) => (
        <ListGroup>
        <ListGroup.Item> <b>Name:</b> {item.name} </ListGroup.Item>
        <ListGroup.Item> <b>Comment:</b> {item.comments} </ListGroup.Item>
        <ListGroup.Item><img src="https://static4.depositphotos.com/1026550/376/i/450/depositphotos_3763236-stock-photo-gold-star.jpg" alt="" style={{width:'20px',height:'20px'}}/> <b>Rating:</b> {item.rating} </ListGroup.Item>
        </ListGroup>
         ))}   

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default RestReview