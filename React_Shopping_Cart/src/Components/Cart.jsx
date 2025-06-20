import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { cartContext } from '../Context/Context'


function Cart() {
const {state:{cart},dispatch} = useContext(cartContext)
const[total ,setTotal] = useState();

  useEffect(()=>{
  setTotal(cart.reduce((acc,curr)=> acc + Number(curr.price) * curr.qty,0))},[cart])

  return (
  <>
    <Header />
    <div className='cart'>
    <h1 className='cart-title'> Your Cart</h1></div>
    {cart.length > 0 ? (<>
    {cart.map((prop)=>(
      <div className='cart-items' key={prop.id}>
        <div className="flexy">
        <img className='cpi' src={prop.image} alt="oscar" />
        <button className='rfc-btn' onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:{id:prop.id}})}>Remove From Cart</button></div>
        <h1 className='cpt'>{prop.title}</h1>
        <div className='cpv'>
        <button className='cab'
        onClick={()=>{dispatch({type:"ADD_CART_QTY",payload:{id:prop.id,},})}}>+</button><p className='ciq'>{prop.qty}</p><button className='cmb'
        onClick={()=>{dispatch({type:"SUBTRACT_CART_QTY",payload:{id:prop.id,},})}}>-</button>
        <h3 className='cip'>{prop.price}</h3>
        <h3 className='cifp'>{prop.price * prop.qty}</h3>
        </div>
        <br /><hr />
        <div className='ctt'>
          <span>Total:</span><span className='ctfp'>{prop.price * prop.qty}</span></div>
      </div>))}</>)
    :(<div className='cart' >Your Cart is Empty</div>)}

    
<div className='sub-total'>
    <h4>Subtotal:{total}</h4></div>
        
    <div className='check-btn'>
      
    <button className='checkout-btn'>Checkout</button>
    
    </div>
    
    </>
  )
}

export default Cart
