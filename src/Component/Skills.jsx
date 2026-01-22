import React from "react";

import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt, FaGasPump } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiChakraui, SiExpo, SiFramer, SiKubernetes, SiWeb3Dotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiDjango, DiDocker, DiJqueryLogo } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaNode } from "react-icons/fa";


const Skills = () => {
  return (
    <div name="skills" className=" w-full h-screen  bg-[#090503] text-yellow-400 pt-[10px]">
      {/**Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4  border-yellow-600 ">
            Skills
          </p>
          <p className="py-2 ">Tech Stack</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 sm:items-center  gap-4 text-center py-8">
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500 ">
            <SiKubernetes size={60} className="w-20 mx-auto" />
            <p className="my-4">Kubernetes</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
            <FaGasPump size={60} className="w-20 mx-auto" />
            <p className="my-4">GSAP</p>
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
            <DiDocker size={60} className="w-20 mx-auto" />
            <p className="my-4">Docker</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
            <SiTailwindcss size={60} className="w-20 mx-auto" />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
            <SiWeb3Dotjs size={60} className="w-20 mx-auto" />
            <p className="my-4">ThirdWeb</p>
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
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
          <DiDjango size={60} className="w-20 mx-auto" />
            <p className="my-4">Django</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
          <SiExpo size={60} className="w-20 mx-auto" />
            <p className="my-4">Expo</p>
          </div>
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
