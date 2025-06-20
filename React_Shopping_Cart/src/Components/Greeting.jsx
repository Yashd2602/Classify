import React from 'react'
import {Link} from "react-router-dom"

function Greeting() {
  return (
    <div className='greeting'>
    <div >  
        
      <h1 className='greet'>Welcome To Classify</h1>
      <h2 className='des'>Shop Your Favourite Accesories</h2>
      <Link to="/hap"><button className='shop-now'>Shop Now</button><br /></Link>
      <div className="showcase"><img  src="images/showcase.png" alt="" /></div>
    </div>
    <div>
  
      </div>
    </div>
  )
}

export default Greeting
