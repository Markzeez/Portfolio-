import React from "react";

import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiChakraui, SiExpo, SiFramer } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiDjango, DiJqueryLogo } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaNode } from "react-icons/fa";


const Skills = () => {
  return (
    <div name="skills" className=" w-full h-screen  bg-[#090503] text-yellow-400 pt-[30px]">
      {/**Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600 ">
            Skills
          </p>
          <p className="py-4 ">Tech Stack</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 sm:items-center  gap-4 text-center py-8">
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500 ">
            <FaHtml5 size={60} className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
            <FaCss3Alt size={60} className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
            <IoLogoJavascript size={60} className="w-20 mx-auto" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
            <FaReact size={60} className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
            <SiFramer size={60} className="w-20 mx-auto" />
            <p className="my-4">Framer Motion</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
            <SiTailwindcss size={60} className="w-20 mx-auto" />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
            <DiJqueryLogo size={60} className="w-20 mx-auto" />
            <p className="my-4">JQuery</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
          <FaGithub  size={60} className="w-20 mx-auto" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
          <BiLogoTypescript size={60} className="w-20 mx-auto" />
            <p className="my-4">Typescript</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
          <SiNextdotjs  size={60} className="w-20 mx-auto" />
            <p className="my-4">Nextjs</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
          <FaPython  size={60} className="w-20 mx-auto" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
          <FaNode  size={60} className="w-20 mx-auto" />
            <p className="my-4">Nodejs</p>
          </div>
          {/* <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500"> */}
          {/* <DiDjango size={60} className="w-20 mx-auto" />
            <p className="my-4">Django</p>
          </div> */}
          {/* <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
          <SiExpo size={60} className="w-20 mx-auto" />
            <p className="my-4">Expo</p>
          </div> */}
           <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
            <SiChakraui size={60} className="w-20 mx-auto" />
            <p className="my-4">Charka UI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
