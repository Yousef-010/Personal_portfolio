import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './Home.css'
import Aboutme from '../AboutMe/Aboutme'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import ContactMe from '../ContactMe/ContactMe'
import MainFooter from '../Footer/MainFooter'

export default function Home() {
    return (
        <div className='home-container'>
            <Profile />
            <Footer />
            
            <Aboutme/>
            <Skills/>
            <Projects/>
            <ContactMe/>
            <MainFooter/>
            
        </div>
    )
}
