import React from 'react'
import Header from './Header'
import email from '../../src/assets/email.png'
import phone from '../../src/assets/phone.png'
import insta from '../../src/assets/insta.png'

function Contact() {
  return (
    <div className='contact'>
      <Header />
      <h1 className='heading'>Contact US</h1>
      <div className="contact-options">
      <div className="email">
        <img src={email} alt="Email" />
        <h2>classify2002@gmail.com</h2>
         </div>
              <div className="phone">
        <img className='phone' src={phone} alt="Phone" />
        <h2>+91 9137457744</h2>
        </div>
              <div className="insta">
        <img src={insta} alt="Insta" />
        <h2>@Classify.2002</h2>
        </div>
      </div>
    </div>
  )
}

export default Contact
