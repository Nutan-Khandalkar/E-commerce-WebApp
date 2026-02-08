import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar'
import CartSidebar from './components/CartSidebar'

function App() {
  return (
<>
    <Navbar />
    <Outlet></Outlet>
    <CartSidebar></CartSidebar>
</>
  )
}

export default App
