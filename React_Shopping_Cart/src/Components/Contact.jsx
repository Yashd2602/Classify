import React from 'react'
import Header from './Header'

function Contact() {
  return (
    <div className='contact'>
      <Header />
      <h1 className='heading'>Contact US</h1>
      <div className="contact-options">
      <div className="email">
        <img src="images/email.png" alt="Email" />
        <h2>classify2002@gmail.com</h2>
         </div>
              <div className="phone">
        <img src="images/phone.png" alt="Phone" />
        <h2>+91 9137457744</h2>
        </div>
              <div className="insta">
        <img src="images/insta.png" alt="Insta" />
        <h2>@Classify.2002</h2>
        </div>
      </div>
    </div>
  )
}

export default Contact
