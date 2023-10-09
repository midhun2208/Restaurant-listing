import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Restcard.css'
import { Link } from 'react-router-dom';


function Restcard({resturant}) {
    console.log(resturant);
  return (
    <div>
        <Link to={`/view/${resturant.id}`} style={{textDecoration:'none', color:'black'}}>
        <Card className='cards mb-3'>
      <Card.Img variant="top" src={resturant.photograph} className='image'/>
      <Card.Body>
        <Card.Title >{resturant.name}</Card.Title>
        <Card.Text style={{height:'100px'}}>
          <b>Address:</b> {resturant.address} <br />
          <b>Neighborhood:</b> {resturant.neighborhood} <br />
          <b>Cuisine type:</b> {resturant.cuisine_type}
        </Card.Text>
      </Card.Body>
            </Card>
        </Link>
    </div>
  )
}

export default Restcard