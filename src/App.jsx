import { useState } from 'react'

import './App.css'

import Home from './Components/Home.jsx';

import Product from './Components/Product.jsx';

import { Routes, Route, Link, createBrowserRouter, RouterProvider } from "react-router-dom";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/product",
      element: <Product/>
    },
  ]);
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
