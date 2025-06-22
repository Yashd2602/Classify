import React, {useState,useEffect} from "react"

import Home from "./Components/Home"
import Items from "./Components/Items"
import Contact from "./Components/Contact"
import Cart from "./Components/Cart"
import NotFoundPage from "./Components/NotFoundPage"
import Hap from "./Components/Hap"

import {createBrowserRouter , RouterProvider} from 'react-router-dom'

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/items",
    element: <Items />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/hap",
    element: <Hap />,
  },
])
{basename: import.meta.env.DEV ? '/' : '/Classify'})
return(
  <RouterProvider router={router} />
)
}

export default App
