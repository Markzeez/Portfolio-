import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHashnode } from 'react-icons/fa6';
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';

const LogoSide = () => {
  return (
    <div className='flex flex-col justify-start items-start space-y-5 fixed z-20 top-1/3 text-2xl ml-5  '>
       <a href=""><FaTwitter className='hover:bg-yellow-400 rounded-full px-1 py-1 w-fit text-2xl' /></a>
       <a herf="https://linkedin.com/in/azeezibrahim"><FaLinkedin className='hover:bg-yellow-400 rounded-full px-1 py-1 w-fit text-2xl' /></a>
       <a href="https://github.com/Markzeez"><FaGithub className='hover:bg-yellow-400 rounded-full px-1 py-1 w-fit text-2xl' /></a>
       <a herf="https://call.whatsapp.com/voice/We6kTPBgQgSQn4qfl0JZJP"><IoLogoWhatsapp className='hover:bg-yellow-400 rounded-full px-1 py-1 w-fit text-2xl' /></a>
       <a href=''> <FaHashnode className='hover:bg-gray-400 rounded-full px-1 py-1 w-fit text-2xl' /> </a>
    </div>
  )
}

export default LogoSide