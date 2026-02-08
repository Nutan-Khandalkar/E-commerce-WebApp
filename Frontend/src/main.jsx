import React from "react";
import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails.jsx'
import CartPage from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import Home from './pages/Home.jsx'
import { CategoryProvider } from './contexts/CategoryContext.jsx'
import { CartProvider } from "./contexts/CartContext";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      { path: '/', 
        element: <Home></Home> },
      {
        path: '/product/:id',
        element: <ProductDetails />
      },
      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/checkout',
        element: <Checkout></Checkout>
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <CategoryProvider>
        <RouterProvider router={router} />
      </CategoryProvider>
    </CartProvider>
  </React.StrictMode>
)
