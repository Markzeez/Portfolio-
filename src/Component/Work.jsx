import React from "react";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-black  bg-[#FCEADE]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 text-black border-pink-600 ">Work</p>
          <p className="py-6">//Check out some of my recent work </p>
        </div>

        <div style={{backgroundImage: 'url(${?})'}} 
        className="grid sm:grid-cols-2 md:grid-col gap-4 ">
          <div className="shadow-lg shadow-[] group container rounded-md flec justify-center items-center mx-auto content-div">
           
           {/**hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              
                <span className="text-2xl font-bold twxt-white tracking-wider  ">Burger ECommerce</span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-black font-bold text-lg">Demo</button>
                  </a>
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-black font-bold text-lg">Code</button>
                  </a>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
