import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#090503] text-yellow-400 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right  text-4xl font-bold">
            <p>
              Hi, I'm Azeez Ibrahim, nice to meet you, please take a look around
            </p>
          </div>
          <div>
            <p>
              I'm a frontend developer with two year of experience in web
              development technology. I've worked on variety of projects for client, 
              Ecommerce, Service Provider and so on I'm passionate about creating 
              user experience and have a simple understanding of re-usable and
              accessibility standards. 
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default About;
