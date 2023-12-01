import React from "react";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react"; 
import { CiMenuBurger } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState (false)
  const handleClkick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#FCEADE] text-black  ">
      <div>
      <img
        src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699903861/1652585820848_rsdyvs.jpg"
        style={{ width: "50px" }}
        className="rounded-full "
      />
      </div>
      {/**menu  */}

      <ul className="hidden md:flex ">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>

      <div onClick={handleClkick} className="md:hidden z-10">
        {!nav ? <IoMdMenu /> : <CiMenuBurger />  }
      </div>

      {/**Mobile */}
      <ul className={!nav ? "hidden" : " absolute top-0 left-0 w-full h-screen bg-[#FCEADE] flex flex-col justify-center items-center "}>
        <li className="py-6 text-4xl ">Home</li>
        <li className="py-6 text-4xl ">About</li>
        <li className="py-6 text-4xl ">Skills</li>
        <li className="py-6 text-4xl ">Works</li>
        <li className="py-6 text-4xl ">Contact</li>
      </ul>

      {/**Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-black " 
            href="/">Twiiter <FaTwitter size={30}/></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
            <a className="flex justify-between items-center w-full text-black " 
            href="/">Linkedin <FaLinkedin size={30}/></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] ">
            <a className="flex justify-between items-center w-full text-black "
            href="/">Whatapps <IoLogoWhatsapp size={30}/></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] ">
            <a className="flex justify-between items-center w-full text-black " 
            href="/">Github <FaGithub  size={30}/></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a className="flex justify-between items-center w-full text-black" 
            href="/">Resume <FaGithub  size={30}/></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
