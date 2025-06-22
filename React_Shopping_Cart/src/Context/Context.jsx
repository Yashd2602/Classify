
import React,{useState,useEffect, createContext, useContext, useReducer} from 'react'
import { cartReducer } from './Reducer';
import social from '../assets/social.jpg'
import oscar from '../assets/oscar.jpg'
import dune from '../assets/dune.jpg'
import mjolnir from '../assets/mjolnir.jpg'
import pulp from '../assets/pulp.jpg'
import forrest from '../assets/forrest.jpg'
import inception from '../assets/inception.jpg'
import lotr from '../../src/assets/lotr.jpg'

export const cartContext = createContext();

function Context({children}) {
    const [products,setProducts] = useState([
    {
        image:oscar,
        title:"Academy Award",
        description:"The most prestigious honor in the history of cinema",
        price:200,
        id:1,
    },
    {
        image:social,
        title:"Visiting Card:The Social Network",
        description:"Mark Zuckerbergs very own first ever visiting card",
        price:80,
        id:2,
    },
    {
        image:dune,
        title:"Desert Sand : Dune",
        description:"Sand imported directly from Arrakis",
        price:100,
        id:3,
    },
    {
        image:mjolnir,
        title:"Mjolnir : Thor",
        description:"Are you worthy enough? Find Out!",
        price:400,
        id:4,
    },
    {
        image:pulp,
        title:"Briefcase : Pulp Fiction",
        description:"Figure out exactly what is in the briefcase featured in the 1994 classic",
        price:100,
        id:5,
    },
    {
        image:forrest,
        title:"Sneakers : Forrest Gump",
        description:"Classic running sneakers of our very own Forrest.... Forrest Gump",
        price:100,
        id:6,
    },
    {
        image:inception,
        title:"Spinning Totem : Inception",
        description:"Figure out if you are in reality or you are dreaming!",
        price:100,
        id:7,
    },
    {
        image:lotr,
        title:"The Ring : LOTR",
        description:"The devillishly d=beautiful ring forged with fire!",
        price:100,
        id:8,
    }])
    
    const[state,dispatch] = useReducer(cartReducer,{
        products:products,
        cart:[],
    })
    
    return (
<cartContext.Provider value={{state,dispatch}}>
    {children}
    </cartContext.Provider>
  )
}

export default Context

export const productState= ()=>{
    return useContext(cartContext);
}