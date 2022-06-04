import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './Home.css'
import Aboutme from '../AboutMe/Aboutme'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import ContactMe from '../ContactMe/ContactMe'
import MainFooter from '../Footer/MainFooter'

import data from '../../../src/data.json'
import { Row,Container } from 'react-bootstrap'

export default function Home() {
    return (
        <div className='home-container'>
            <Profile />
            <Footer />
            <Aboutme/>
            <Skills/>
            <Container>
            <Row>
            {
                data.data.map((Element)=>{
                    return (
                    <Projects single_project={Element}/>
                    )
                })
            }
            </Row>
            </Container>
            <ContactMe/>
            <MainFooter/>
            
        </div>
    )
}
