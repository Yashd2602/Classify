
import React,{useState,useEffect, createContext, useContext, useReducer} from 'react'
import { cartReducer } from './Reducer';

export const cartContext = createContext();

function Context({children}) {
    const [products,setProducts] = useState([
    {
        image:"images/oscar.jpg",
        title:"Academy Award",
        description:"The most prestigious honor in the history of cinema",
        price:200,
        id:1,
    },
    {
        image:"images/social.jpg",
        title:"Visiting Card:The Social Network",
        description:"Mark Zuckerbergs very own first ever visiting card",
        price:80,
        id:2,
    },
    {
        image:"images/dune.jpg",
        title:"Desert Sand : Dune",
        description:"Sand imported directly from Arrakis",
        price:100,
        id:3,
    },
    {
        image:"images/mjolnir.jpg",
        title:"Mjolnir : Thor",
        description:"Are you worthy enough? Find Out!",
        price:400,
        id:4,
    },
    {
        image:"images/pulp.jpg",
        title:"Briefcase : Pulp Fiction",
        description:"Figure out exactly what is in the briefcase featured in the 1994 classic",
        price:100,
        id:5,
    },
    {
        image:"images/forrest.jpg",
        title:"Sneakers : Forrest Gump",
        description:"Classic running sneakers of our very own Forrest.... Forrest Gump",
        price:100,
        id:6,
    },
    {
        image:"images/inception.jpg",
        title:"Spinning Totem : Inception",
        description:"Figure out if you are in reality or you are dreaming!",
        price:100,
        id:7,
    },
    {
        image:"images/lotr.jpg",
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