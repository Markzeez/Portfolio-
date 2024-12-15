import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomCarousel = ({ images = [] }) => {
  // Custom next and previous buttons
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
    >
      <FaArrowRight />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
    >
      <FaArrowLeft />
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
    <div className="relative">
      {images.length > 0 ? (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[350px] object-cover"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-500">No images to display</p>
      )}
    </div>
  );
};

export default CustomCarousel;
