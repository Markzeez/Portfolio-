import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#FCEADE]">
      {/**Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#CCd6F6]">
          AZEEZ IBRAHIM
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b4]">
          I am a Frontend Developer
        </h2>
        <p className="text-[#8892b8] py-4 max-w-[700px]">
          A frontend Focus Web Developer building the Frontend of Websites and
          Web Application that leads to the success of the overall product and
          Freelance providing service for programming and design content needs
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 ">
            View Work
            <span className="group-hover:rotate-90 duration-300">
            <FaArrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
