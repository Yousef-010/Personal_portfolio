import React from 'react'
import Typical from 'react-typical' 
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile-container'>    
        <div className='profile-parent'>
            <div className='profile-details'>

               
            
            <div className='profile-details-name'>
                <span className='primary-text'>
                    {" "}
                    Hello, I'M <span className='highlighted-text'>Yousef</span>
                </span>
            </div>
            <div className='profile-details-role'>
                <span className='primary-text'>
                    {" "}
                    <h1>
                        {" "}
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Yousef Al Farwan✌️",
                            1000,

                            'MERN stack Dev 💥',
                            1000,

                            'Back-End Dev ☢️',
                            1000,

                            'Python Dev 🐍',
                            1000,

                        ]}
                        /> 
                    </h1>
                    <span className='profile-role-tagline'>
                        Buliding Projects with FrontEnd and BackEnd 
                    </span>
                    </span>
                
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn '>
                        {" "}
                        Hire Me {" "}
                    </button>
                    <a href='Resume.pdf' download='Resume.pdf' >
                    <button className='btn highlighted-btn'>Get Resume</button>    
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
           
        </div>
        <div className='colz'>
                    <div className='cloz-icon'>

                        <a href='https://www.facebook.com/yousef.farwan.73/'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://github.com/Yousef-010'>
                            <i className='fa fa-github-square'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/yousef-al-farwan/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://twitter.com/YousefFarwan'>
                            <i className='fa fa-twitter-square'></i>
                        </a>  
                    </div>
                </div>
    </div>
  )
}
