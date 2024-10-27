'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import img from "../Images/pi_bg.jfif"
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Product from './Product.jsx'
// import Chatbot from './Chatbot.jsx'
import { useAuth0 } from '@auth0/auth0-react'

const navigation = [
  { name: 'Pricing', href: './price' },
  { name: 'Features', href: './Search.jsx' },
  { name: 'Find PGs', href: './pg' },
  { name: 'About', href: './About' },
  { name: 'Profile', href: './profile' },
]

export default function Home() {
    const navigate = useNavigate();
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    function gotoPG() {
        navigate("/product")
    }


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
      {/* <nav className="bg-white bg-opacity-80 p-4 shadow-md">
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-gray-700">Home</a></li>
          <li><a href="#about" className="text-gray-700">About</a></li>
          <li><a href="#services" className="text-gray-700">Services</a></li>
          <li><a href="#contact" className="text-gray-700">Contact</a></li>
        </ul>
      </nav> */}
      <Nav/>
      {/* <div className="absolute inset-0 flex items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Website</h1>
      </div> */}
    </div>
  )
}
