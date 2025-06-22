import React from 'react'
import Header from './Header'
import Items from './Items'
import social from '../assets/social.jpg'
import oscar from '../assets/oscar.jpg'
import dune from '../assets/dune.jpg'
import mjolnir from '../assets/mjolnir.jpg'
import pulp from '../assets/pulp.jpg'
import forrest from '../assets/forrest.jpg'
import inception from '../assets/inception.jpg'
import lotr from '../assets/lotr.jpg'

function Products() {

  return (
    <>
    <Header />
    <div className='products'>
      <Items src={oscar} title="Academy Award" description="The most prestigious honor in the history of cinema" price="$200" />
      <Items src={social} title="Visiting Card:The Social Network" description="Mark Zuckerbergs very own first ever visiting card" price="$80" />
      <Items src={dune} title="Desert Sand : Dune" description="Sand imported directly from Arrakis" price="$100" />
      <Items src={mjolnir} title="Mjolnir : Thor" description="Are you worthy enough? Find Out!" price="$400" />
      <Items src={pulp} title="Briegcase : Pulp Fiction" description="Figure out exactly what is in the briefcase featured in the 1994 classic" price="$100" />
      <Items src={forrest} title="Sneakers : Forrest Gump" description="Classic running sneakers of our very own Forrest.... Forrest Gump" price="$100" />
      <Items src={inception} title="Spinning Totem : Inception" description="Figure out if you are in reality or you are dreaming!" price="$100" />
      <Items src={lotr} title="The Ring : LOTR" description="The devillishly d=beautiful ring forged with fire!" price="$100" />
    </div></>
  )
}

export default Products
