import React from 'react'
import Header from './Header'
import Greeting from './Greeting'
import Items from './Items'

function Home(props) {
  return (
    <>
    <Header homepage={props.homepage} />
    <Greeting  productPage={props.productsPage}/>
    </>
  )
}

export default Home
