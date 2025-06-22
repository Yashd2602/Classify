import React,{useContext} from 'react'
import {cartContext, productState,} from '../Context/Context'
import Header from './Header';

function Items({prop}) {
const {state:{cart},dispatch} = productState();
  const isInCart = cart.some(item => item.id === prop.id);

  return (
    <>
<div className='flex'> 
 <div className='card' key={prop.id}>
      <img className='card-image'  src={prop.image} alt="Item" /><br />
      <h2 className='card-info'>{prop.title}</h2><br />
      <h3 className='card-info'>{prop.description}</h3><br />
      <h3 className='card-info'>{prop.price}</h3><br />
      <button
          className={`atc-btn ${isInCart ? 'disabled' : ''}`}
          onClick={() => {
            if (!isInCart) {
              dispatch({ type: "ADD_TO_CART", payload: prop });
            }
          }}
          disabled={isInCart}
        >
          {isInCart ? '✔️ Added to Cart' : 'Add To Cart'}
        </button>
      </div>
    
    </div>
    </>
   )
}

export default Items
