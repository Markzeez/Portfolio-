import React from "react";

import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { FaGithubSquare } from "react-icons/fa";

const Skills = () => {
  return (
    <div name="skills" className=" w-full h-screen bg-[#FCEADE] text-black">
      {/**Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4 ">Tech Stack</p>
        </div>

        <div className="w-full grid grid-cols-4 sm:grid-col-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
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
            <p className="my-4">Framer Animation</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
            <SiTailwindcss size={60} className="w-20 mx-auto" />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
            <DiJqueryLogo size={60} className="w-20 mx-auto" />
            <p className="my-4">J Query</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
          <SiTailwindcss size={60} className="w-20 mx-auto" />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#d8c2b3] hover:scale-110 duration-500">
          <FaGithubSquare size={60} className="w-20 mx-auto" />
            <p className="my-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
