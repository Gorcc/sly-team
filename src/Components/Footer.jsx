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
        {/* <a href="https://www.instagram.com/nixiedigital/" target='_blank'>Developed by Nixie Digital</a> */}
    </div>
  )
}

export default Footer