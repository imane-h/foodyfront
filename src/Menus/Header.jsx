import React from 'react'
import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { IoSearch } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import  '../assets/Css/orelega-one.css';
import Login from "../Login/Login"


const Header = () => {
    const [showLoginModal, setShowLoginModal] = useState(false)
    const openLoginModal = () => {
        setShowLoginModal(true);
        
      };
      const closeLoginModal = () => {
        setShowLoginModal(false);
        
      };
  return (
    <>
    <div>
      <Navbar  className="w-full bg-inherit">
            <div className="container mx-auto flex justify-between items-center">
                <Navbar.Brand href="#" className="font-montserrat font-bold text-lime-700 text-3xl" style={{ fontFamily: 'Orelega One, cursive' }}>Foody.</Navbar.Brand>
                <div className="flex justify-between items-center">
                    <Nav className="mr-auto space-x-20">
                    <Nav.Link href="#" className="text-lime-700 text-sm font-semibold">Home</Nav.Link>
                    <Nav.Link href="#" className="text-lime-700 text-sm font-semibold">Restaurants</Nav.Link>
                    <Nav.Link href="/Menus" className="text-black text-sm font-semibold">Menus</Nav.Link>
                    <Nav.Link href="#" className="text-black text-sm font-semibold">About Us</Nav.Link>
                    <Nav.Link href="#" className="text-black text-sm font-semibold">Contact</Nav.Link>
                    </Nav>
                </div>
                
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full">
                        <IoSearch size={15} />
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full">
                        <BsCart4 size={15} />
                    </div>
                    <div>
                        <button onClick={openLoginModal} className="bg-white rounded-full px-3 py-1 text-xs font-semibold">Log In</button>
                        </div> {/* Login button */}
                </div>
            </div>
        </Navbar>
    </div>
    <Login
        show={showLoginModal}
        onClose={closeLoginModal}
     
      />
    </>
    
  )
}

export default Header