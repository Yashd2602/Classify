import React, { useContext } from 'react'
import {productState } from '../Context/Context';
import Items from './Items';
import Header from './Header';

function Hap() {
  const {state:{products}} = productState()
    //   const {products,cart,setCart} = useContext(cartContext);
    //  const productsv = products[0]
    //  products.map((prop)=>{console.log(prop.image);})
      
  return (
    <>
    <Header />
    <div className="flex">
      {products.map((prop)=>(
        <Items prop={prop} key={prop.id}/>
))}</div>
    </>
  )
 
}

export default Hap
