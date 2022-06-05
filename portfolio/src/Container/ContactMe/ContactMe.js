import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './ContactMe.css'
export default function ContactMe() {
  return (
    <>
    <div className='body-content'>
    <div className='header'>
          <span>Contact  Me </span>
          </div>
        <div className='background'>

      <div className='container'>
        <div className='screen'>
          
          <div className='screen-header'>
           
          </div>

          <div className='screen-body'>

            <div className='screen-body-item left'>
              <div className='app-title'>
                <span>CONTACT</span>
                <span>ME </span>
              </div>
              <div className='app-contact'>Please ! Leave a message to us ___</div>
            </div>

            <div className='screen-body-item'>
              <div className='app-form'>
                <div className='app-form-group'>
                  <input className='app-form-control' placeholder='NAME' />
                </div>
                <div className='app-form-group'>
                  <input className='app-form-control' placeholder='EMAIL'/>
                </div>
                <div className='app-form-group'>
                  <input className='app-form-control' placeholder='CONTACT NO'/>
                </div>
                <div className='app-form-group message'>
                  <input className='app-form-control' placeholder='MESSAGE'/>
                </div>
                <div className='app-form-group buttons'>
                  <button className='app-form-button'>CANCEL</button>
                  <button className='app-form-button'>SEND</button>
                </div>
              </div>
            </div>
            
          </div>

        </div>
         
      </div>
    </div>
    </div>
    </>
  )
}
