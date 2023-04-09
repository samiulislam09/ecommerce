import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <nav className="bg-sky-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                    <Link to='/home'><p className="h-8 w-auto text-white text-3xl" >E-commerce</p></Link>
                    </div>
                    <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <Link to="/home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Home</Link>
                        <Link to="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Products</Link>
                        <Link to="/cart" className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-lg font-medium">cart</Link>
                        <Link to="/admin-dashboard" className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-lg font-medium">Dashboard</Link>
                        
                    </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                    <button onClick={toggleMenu} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/home" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                    <Link to="/products" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Products</Link>
                    <Link to="/cart" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">cart</Link>
                    <Link to="/admin-dashboard" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar