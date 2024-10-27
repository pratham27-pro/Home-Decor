'use client'

import React, { useState } from 'react';
import { FaSearch, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import img1 from '../Images/1.jpg'
import img2 from '../Images/2.jpg'
import img3 from '../Images/3.jpg'
import img4 from '../Images/4.jpg'
import img5 from '../Images/5.jpg'
import img6 from '../Images/6.jpg'

// import Chatbot from './Chatbot.jsx';


const Product = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigate = useNavigate()
  function buy() {
    navigate("/candidates")
  }

  const pgData = [
    {
      id: 1,
      name: 'Metal Floor Lamp with 3 Shelves (Jute). LED Bulb Included',
      link: 'https://amzn.to/40kOAg5%7D',
      image: `${img1}`,
    },
    {
      id: 2,
      name: 'INDULGE HOMES - White Ring shaped Vase (Fancy and stylish)',
      link: 'https://www.amazon.in/dp/B0B9369WK1/ref=cm_sw_r_as_gl_apa_gl_i_dl_H80K5TNAXJ5FDF2WDX9Z?linkCode=ml2&tag=homedecor4315-21',
      image: `${img2}`,
    },
    {
      id: 3,
      name: 'Homesake® Lamp, Table Lamp, Night Lamp for Bedroom',
      link: 'https://amzn.to/3BVipcU',
      image: `${img3}`,
    },
    {
        id: 4,
        name: 'Adjustable hanging shelve (stylish)',
        link: 'https://www.amazon.in/dp/B09MCWZBH2/ref=cm_sw_r_as_gl_apa_gl_i_dl_BCG0VSBZEQ50T3BREZ7W?linkCode=ml2&tag=homedecor4315-21',
        image: `${img4}`,
    },
    {
        id: 5,
        name: 'Test tube home decor planter',
        link: 'https://www.amazon.in/dp/B0CJ744N7Z/ref=cm_sw_r_as_gl_apa_gl_i_DAA6J9PZG9J22CEY4KM4?linkCode=ml2&tag=homedecor4315-21',
        image: `${img5}`,
    },
    {
        id: 6,
        name: '8 Pack artificial potted plants',
        link: 'https://amzn.to/3YnfL7x',
        image: `${img6}`,
    }
      
  ];

  const filteredPGs = pgData.filter(pg =>
    pg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setErrorMessage('');
    if (term && !filteredPGs.length) {
      setErrorMessage('No Products found for this.');
    }
  };

  return (
    
    <div>
    <Nav/>
    {/* <Chatbot/> */}
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Products</h1>
        
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search Products"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            aria-label="Search Products"
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {errorMessage && (
          <div className="text-red-500 mb-4 text-center" role="alert">
            {errorMessage}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPGs.map((pg) => (
            <div key={pg.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={pg.image} alt={pg.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{pg.name}</h2>
                
                <div className="flex items-center text-gray-700 mb-2">
                  
                  <span>{pg.contactNumber}</span>
                </div>
                
              </div>
              <button onClick={() => window.open(pg.link, '_blank')}
                className="w-full bg-blue-500 text-white py-3 font-semibold transition duration-300 hover:bg-blue-600"
                aria-label={`Get more information about ${pg.name}`}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Product;
