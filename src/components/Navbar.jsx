import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [bgColor, setBgColor] = useState('transparent')
  const handleClick = () => setMenu(!menu)

  useEffect(() => {
    const changColor = () => {
      if (window.scrollY > 90) {
        setBgColor('black')
      } else {
        setBgColor('transparent')
      }
    }
    window.addEventListener('scroll', changColor)
  }, [])

  return (
    <div
      style={{ background: `${bgColor}` }}
      className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-transparent text-gray-300 z-30 ease-in duration-300"
    >
      <div>
        <h1 className="text-3xl font-burtons cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            <strong className="dark:text-gray-100">lichih</strong> <strong className="text-cyan-600">yen</strong>
          </Link>
        </h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-cyan-600 duration-500">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-cyan-600 duration-500">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-cyan-600 duration-500">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-cyan-600 duration-500">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-cyan-600 duration-500">
          <Link to="contact" smooth={true} duration={700}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-30">
        {!menu ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          !menu
            ? 'absolute top-0 left-[-100%] w-full h-screen bg-[#0a192f] z-20 flex flex-col justify-center items-center ease-in duration-300'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] z-20 flex flex-col justify-center items-center ease-in duration-300'
        }
      >
        <ul>
          <li className="py-6 text-4xl hover:text-cyan-600 duration-300">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-cyan-600 duration-300">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-cyan-600 duration-300">
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-cyan-600 duration-300">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl hover:text-cyan-600 duration-300">
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/*  Socila Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#0072B1]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/lichih-yen/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#171515]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/lichih-yen"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto: lichih.yen@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.lichih-dev.com"
              target="_blank"
              rel="noreferrer"
            >
              Website
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
