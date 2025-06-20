import React from 'react'
import{Link} from "react-router-dom"

function Header(){
  return (
    <div className='header'>
      <span className="logo">
        <Link to="/"><img src="images/logo.png" alt="Classify" /></Link>
      </span>
      <span className="options">
        <ul className='nav'>
            <Link to="/"><li>Home</li></Link>
           <Link to="/hap"> <li>Products</li></Link>
           <Link to="/contact"> <li>Contact</li></Link>
        </ul>
      </span>
      <div className='cart-logo'><Link to="/cart"><img className='cl' src="images/Cart.jpg" alt="Cart" /></Link></div>
    </div>
  )
}

export default Header
