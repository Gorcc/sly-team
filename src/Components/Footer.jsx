import React from 'react'
import "../Styles/Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='footer-container'>
      <span className='mail'>
        <FontAwesomeIcon icon={faEnvelope}/>
      <a href='mailto:slyculture0@gmail.com'> slyculture0@gmail.com</a>
      </span>
        
        <span>All Right Reserved ©</span>
        <a href="https://www.almego.studio" target="_blank" rel="noopener noreferrer">Design & Development by Almego Studio</a>
    </div>
  )
}

export default Footer