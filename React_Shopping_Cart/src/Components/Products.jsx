import React from 'react'
import Header from './Header'
import Items from './Items'

function Products() {
  const singleProducts ={
    
  }
  return (
    <>
    <Header />
    <div className='products'>
      <Items src="images/oscar.jpg" title="Academy Award" description="The most prestigious honor in the history of cinema" price="$200" />
      <Items src="images/social.jpg" title="Visiting Card:The Social Network" description="Mark Zuckerbergs very own first ever visiting card" price="$80" />
      <Items src="images/dune.jpg" title="Desert Sand : Dune" description="Sand imported directly from Arrakis" price="$100" />
      <Items src="images/mjolnir.jpg" title="Mjolnir : Thor" description="Are you worthy enough? Find Out!" price="$400" />
      <Items src="images/pulp.jpg" title="Briegcase : Pulp Fiction" description="Figure out exactly what is in the briefcase featured in the 1994 classic" price="$100" />
      <Items src="images/forrest.jpg" title="Sneakers : Forrest Gump" description="Classic running sneakers of our very own Forrest.... Forrest Gump" price="$100" />
      <Items src="images/inception.jpg" title="Spinning Totem : Inception" description="Figure out if you are in reality or you are dreaming!" price="$100" />
      <Items src="images/lotr.jpg" title="The Ring : LOTR" description="The devillishly d=beautiful ring forged with fire!" price="$100" />
    </div></>
  )
}

export default Products
