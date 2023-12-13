import React from "react";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-yellow-400   bg-[#090503]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pb-8 space-y-8">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 text-yellow-400 border-yellow-600 ">
            Work
          </p>
        </div>
        {/**Container */}
        <div className="grid sm:grid-cols-2 md:grid-col gap-4 ">
          {/**Grid */}
          <div
            style={{ backgroundImage: "" }}
            className="shadow-lg shadow-[#d8c2b3] group container rounded-md flec justify-center items-center mx-auto content-div"
          >
            {/**hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold twxt-white tracking-wider  ">
                Burger E-Commerce
              </span>
              <div className="pt-8 text-center">
                <a href="https://burger-king-azeezs-projects.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: "url(${Working})" }}
            className="shadow-lg shadow-[#d8c2b3] group container rounded-md flec justify-center items-center mx-auto content-div"
          >
            {/**hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold twxt-white tracking-wider  ">
                ACME Shophere Ecommerce
              </span>
              <div className="pt-8 text-center">
                <a href="https://acme-shophere.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-col gap-4 ">
          {/**Grid */}
          <div
            style={{ backgroundImage: "" }}
            className="shadow-lg shadow-[#d8c2b3] group container rounded-md flec justify-center items-center mx-auto content-div"
          >
            {/**hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold twxt-white tracking-wider  ">
                Travel Website
              </span>
              <div className="pt-8 text-center">
                <a href="https://travel-azeezs-projects.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: "url(${Working})" }}
            className="shadow-lg shadow-[#d8c2b3] group container rounded-md flec justify-center items-center mx-auto content-div"
          >
            {/**hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold twxt-white tracking-wider  ">
                Dashboard
              </span>
              <div className="pt-8 text-center">
                <a href="https://dashbord-azeezs-projects.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-black font-bold text-lg">
                    Demo
                  </button>
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
