import React from 'react'
import {Link} from "react-router-dom"
import showcase from '../../src/assets/showcase.png'

function Greeting() {
  return (
    <div className='greeting'>
    <div >  
        
      <h1 className='greet'>Welcome To Classify</h1>
      <h2 className='des'>Shop Your Favourite Accesories</h2>
      <Link to="/hap"><button className='shop-now'>Shop Now</button><br /></Link>
      <div className="showcase"><img  src={showcase} alt="showcase" /></div>
    </div>
    <div>
  
      </div>
    </div>
  )
}

export default Greeting
