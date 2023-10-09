import React, { useEffect, useState } from 'react'
import './Viewrest.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from '../Restop/Restop';
import RestReview from '../RestReview/RestReview';






function Viewrest() {
    // const pathParameter = useParams()
    // console.log(pathParameter);
    // console.log(pathParameter.id);

    //destructure
    const {id} = useParams()
    console.log(id);

    const [restDetails,setRestDetails] = useState({}) 

    //Api ca,ll for get data of the particular resturant
    const fetchData = async () => {
        const {data} = await axios.get(`http://localhost:3001/restaurants/${id}`)
        console.log(data);
        setRestDetails(data)
    }
    useEffect(()=> {
        fetchData();
    },[])

  return (
    <div>
        <Row>
            <Col md>
            {/* image */}
            <img src={`${restDetails.photograph}`} alt="" style={{width:"400px", margin:"20px", height:"600px", borderRadius:"20px"}}/>
            </Col>
            <Col style={{marginTop:"50px", marginRight:"100px"}}>
            <ListGroup>
      <ListGroup.Item>Name: {restDetails.name}</ListGroup.Item>
      <ListGroup.Item>Address: {restDetails.address}</ListGroup.Item>
      <ListGroup.Item>Cuisine Type: {restDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Neighborhood: {restDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item><Restop op = {restDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><RestReview restreview = {restDetails.reviews}/></ListGroup.Item>

    </ListGroup>
            </Col>
        </Row>
    </div>
  )
}

export default Viewrest