import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './ContactMe.css'
export default function ContactMe() {
  return (
    <div className='contact-body'>


      <div className='header'>
        <span>Contact section </span>
      </div>

      

      <Form className='content'>

        <Row className='content-row'>
          <Col>
            <Form.Control className='content-f-n' placeholder="First name" />
          </Col>
          <Col>
            <Form.Control className='content-l-n' placeholder="Last name" />
          </Col>
        </Row>

        <Form.Group className="mb-2 "   controlId="formBasicEmail">
          <Form.Control className='content-email' type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            I'll never sare your masseage with anyone 
          </Form.Text>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicCheckbox">

        </Form.Group>
        <Button className='content-btn' variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  )
}
