import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Restcard from '../Restcard/Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Allrest.css'



function Allrest() {

  const [allResturant,setAllResturant] = useState([])

  const fetchData = async() =>{
    const response = await axios.get('https://restaurant-server-5kob.onrender.com/restaurants')
    
    setAllResturant(response.data)
  }
  console.log(allResturant)

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div>
      <Row className='roww'>

      {
        allResturant.map((item) => (
          <Col sm={12} md={6} lg={4} xl={3}>
          <Restcard resturant = {item}/>
          </Col>
        ))
      }
      </Row>

    </div>
  )
}

export default Allrest
