import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const CustomCarousel = ({ works = [] }) => {
  // Custom navigation buttons
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
    >
      <FaArrowRight size={20} />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
    >
      <FaArrowLeft size={20} />
    </button>
  );

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  
  return (
    <div className="relative w-full h-auto text-black">
      <div className="text-center pb-8">
        <p className="text-4xl font-bold border-b-4 border-yellow-600 inline-block">
          My Work
        </p>
      </div>

      {works.length > 0 ? (
        <Slider {...settings}>
          {works.map((work, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <img
                src={work.image}
                alt={`Work ${index + 1}`}
                className="w-[400px] h-[300px] object-cover rounded-lg shadow-md"
              />
              <div className="mt-4 flex space-x-4">
                <a
                  href={work.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                >
                  Demo
                </a>
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-500">No work to display</p>
      )}
    </div>
  );
};

export default CustomCarousel;




const workData = [
  {
     image: "https://via.placeholder.com/400",
     demo: "https://example.com/demo",
     github: "https://github.com/example",
  },
  {
     image: "https://via.placeholder.com/400",
     demo: "https://example.com/demo2",
     github: "https://github.com/example2",
     },
     {
     image: "https://via.placeholder.com/400",
     demo: "https://example.com/demo2",
     github: "https://github.com/example2",
   },
       {
         image: "https://via.placeholder.com/400",
         demo: "https://example.com/demo2",
         github: "https://github.com/example2",
       }
   ];
 
   
     

 <CustomCarousel works={workData} />

