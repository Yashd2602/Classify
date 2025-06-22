import React, {useState,useEffect} from "react"

import Home from "./components/Home"
import Items from "./components/Items"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import NotFoundPage from "./components/NotFoundPage"
import Hap from "./components/Hap"

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
// {basename: import.meta.env.DEV ? '/' : '/Classify'})
return(
  <RouterProvider router={router} />
)
}

export default App
