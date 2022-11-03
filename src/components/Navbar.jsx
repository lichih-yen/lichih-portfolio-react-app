import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
// import Logo from '../assets/Logo_ly.png'

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h1 className="text-3xl font-burtons">
          <strong className="dark:text-gray-100">lichih</strong> <strong className="text-cyan-600">yen</strong>
        </h1>
      </div>

      {/* Menu */}
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className="hidden">
        <FaBars />
      </div>
      {/* Mobile Menu */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
      {/*  Socila Icons */}
      <div></div>
    </div>
  )
}

export default Navbar
