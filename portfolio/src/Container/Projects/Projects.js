import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
 
import Card from 'react-bootstrap/Card'
import { Col } from 'react-bootstrap';

import './Projects.css'
import data from '../../../src/data.json'


export default function Projects({single_project}) {

  const [isShowen, setisShowen] = useState(false)
  const handelShow = () => {
    setisShowen(true)
  }
  return (
     
       
     
        <Col className='coll' md="auto" lg="4" >

        
          <Card className='thecard' style={{ width: '20rem' }}>
            <Card.Img className='image' variant="top" src={single_project.main_image} />
            <Card.Body> 
              <Card.Title className='title'> {single_project.title}</Card.Title>
              <Card.Text className='desc-text'>{single_project.description}</Card.Text>
              <Card.Title className='sub_title'>{single_project.F_B}</Card.Title>
              <Button variant="info" className='card-btn' >See Demo</Button>
            </Card.Body>
          </Card>
          
            
          
        </Col>

     

    

  )
}
