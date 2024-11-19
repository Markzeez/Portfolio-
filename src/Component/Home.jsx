import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Home = () => {
  const [show, SetShow] = useState(false);
  const handleClick = () => SetShow(!show);

  return (
    <div name="home" className="w-full h-screen bg-[#090503] ">
      {/**Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-50">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#c7d5ad]">
          AZEEZ IBRAHIM
        </h1>
        <TypeAnimation
          sequence={[
            'Frontend Developer',
            1000,
            'Software Developer',
            1000,
            'UI Engineer',
            1000,
            'Backend Developer',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: '3rem',
            display: 'inline-block',
            color: '#8892b4',
            fontWeight: '2rem',
          }}
          repeat={Infinity}
        />
        {/* <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b4]">
          Software Developer
        </h2> */}
        <div className="flex flex-row gap-8 justify-between ">
          <p className="text-[#8892b8] text-sm font-semibold py-4 max-w-[700px]">
            A Frontend and Backend Focus Web Development building the User
            Interphase and User Experience of Website application and Server
            side, and Mobile Application that leads to the success of the
            overall product and Freelance providing service for programming,
            deployment, testing , design , content needs
          </p>
          {/* <motion.div
          className="w-16 h-16 bg-yellow-500 "
            animate={{
              x: [0, 100, 100, 0, 0],
              y: [0, 0, 100, 100, 0]
            }}
            transition= {{
              durations: 4,
              ease: 'spring',
              repeat: Infinity
            }}
            
          /> */}
        </div>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600 ">
            <Link to="work">View Work</Link>
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
