import React from "react";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react"; 
import { CiMenuBurger } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import {Link} from 'react-scroll'
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoMenuOutline } from 'react-icons/io5';
import { IoCloseOutline } from 'react-icons/io5';

const Navbar = () => {
  const [nav, setNav] = useState (false)
  const handleClick = () => {
    setNav(!nav);
  };
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#090503] text-yellow-400  ">
      <div>
      <img
        src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699903861/1652585820848_rsdyvs.jpg"
        style={{ width: "50px" }}
        className="rounded-full "
      />
      </div>
      {/**menu desktop view  */}

      <ul className="hidden md:flex ">
        <li className=" hover:text-yellow-500 hover:underline hover:transition"> <Link  to="home"  smooth={true}  duration={500}> Home </Link> </li>
        <li className="hover:text-yellow-500 hover:underline hover:transition"> <Link  to="about"  smooth={true}  duration={500}> About </Link> </li>
        <li className="hover:text-yellow-500 hover:underline hover:transition"> <Link  to="skills"  smooth={true}  duration={500}> Skills </Link> </li>
        <li className="hover:text-yellow-500 hover:underline hover:transition"> <Link  to="work"  smooth={true}  duration={500}> Work </Link> </li>
        <li className="hover:text-yellow-500 hover:underline hover:transition"> <Link  to="contact"  smooth={true}  duration={500}> Contact </Link> </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <IoMdMenu /> : <IoCloseOutline/>  }
      </div>


       {/* Hamburger
       <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <div className="flex flex-row space-x-5 text-white">
            <IoCloseOutline className="text-white" size={20} />{' '}
            <div className='flex flex-row space-x-2'>
            
            </div>
          </div>
        ) : (
          <IoMenuOutline className="text-black" size={15} />
        )}
      </div> */}
      {/**Mobile */}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'absolute text-black left-0 top-0 w-full bg-[#090503] px-2 py-7 flex flex-col pl-8 focus:underline-offset-2 '
            : 'absolute left-[-100%]'
        }
      >
        <ul className='text-yellow-400 font-semibold text-left space-x-5  '>
         <div>
         <div>
      
      </div>
        <Link to="home"> <li className="hover:underline hover:transition-opacity space-x-4 ">Home</li></Link>
         <Link to="about"> <li className="hover:underline hover:transition-opacity ">About</li></Link>
         <Link to="skills"><li className="hover:underline hover:transition-opacity ">Skills</li></Link>
          <Link to="work"><li className="hover:underline hover:transition-opacity ">Work</li></Link>
         <Link to="contact"> <li className="hover:underline hover:transition-opacity ">Contact</li></Link>
  
          </div>        
        </ul>
      </div>

      {/**Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-black " 
            href="https://x.com/Markzeez?t=FX8pV18JiGQ-M-uEFWgChw&s=08">Twiiter <FaTwitter size={30}/></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
            <a className="flex justify-between items-center w-full text-black " 
            href="www.linkedin.com/in/azeezibrahim">Linkedin <FaLinkedin size={30}/></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] ">
            <a className="flex justify-between items-center w-full text-black "
            href="https://wa.me/qr/CTB6HSGIFXXDD1">Whatapps <IoLogoWhatsapp size={30}/></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#b7c26f] ">
            <a className="flex justify-between items-center w-full text-black " 
            href="https://github.com/Markzeez">Github <FaGithub  size={30}/></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a46fc2]">
            <a className="flex justify-between items-center w-full text-black" 
            href="https://drive.google.com/file/d/1r8ElAqop0lsbHbr2yec0kXjNKBxsqKQG/view"> Resume <IoDocumentTextSharp size={30} />  </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
