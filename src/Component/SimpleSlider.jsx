
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const SimpleSlider = () => {
  // Custom Next Arrow
   const NextArrow = ({ onClick }) => (
      <button
        onClick={onClick}
        className="absolute top-1/2 right-20 transform -translate-y-1/2 z-10 p-2 bg-yellow-200 text-gray-300 rounded-full shadow-lg hover:bg-yellow-300"
      >
        <FaArrowRight size={20} />
      </button>
    );
  
    const PrevArrow = ({ onClick }) => (
      <button
        onClick={onClick}
        className="absolute top-1/2 left-20 transform -translate-y-1/2 z-10 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
      >
        <FaArrowLeft size={20} />
      </button>
    );
  
  

  // Slider settings
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
    <div name="carousel" className="w-full h-fit bg-[#090503]">
      <h1 className='text-4xl font-bold inline border-b-4 text-yellow-400 border-yellow-600 mt-14 ml-[80px]'>My Work</h1>
     {/* <div className='mb-[-10px]'> */}
     <Slider {...settings}>
        {/* Slide 1 */}
        <div className=" flex w-full h-[300px] sm:h-[400px] lg:h-[600px] mt-[50px]">
          <img src='' className="mx-auto w-[500px] h-[400px] object-cover" alt="" />
           <div className='flex justify-center items-center gap-6 '>
           <button className="text-sm sm:text-lg lg:text-lg text-yellow-400 bg-slate-400 mt-3 rounded p-2">
              Demo
            </button>
            <button className="text-sm sm:text-lg lg:text-xl text-yellow-400 bg-slate-400 mt-3 rounded p-2" >
              Github
            </button>
           </div>
        </div>

        {/* Slide 2 */}
        <div className="flex w-full h-[300px] sm:h-[400px] lg:h-[600px] mt-[50px]">
          <img src='' className="mx-auto w-[500px] h-[400px] object-cover" alt="" />
           <div className='flex justify-center items-center gap-6'>
           <button className="text-sm sm:text-lg lg:text-lg text-yellow-400 bg-slate-400 mt-3 rounded p-2">
              Demo
            </button>
            <button className="text-sm sm:text-lg lg:text-xl text-yellow-400 bg-slate-400 mt-3 rounded p-2" >
              Github
            </button>
           </div>
        </div>


        {/* Slide 3 */}
        <div className="flex w-full h-[300px] sm:h-[400px] lg:h-[600px] mt-[50px]">
          <img src='' className="mx-auto w-[500px] h-[400px] object-cover" alt="" />
           <div className='flex justify-center items-center gap-6'>
           <button className="text-sm sm:text-lg lg:text-lg text-yellow-400 bg-slate-400 mt-3 rounded p-2">
              Demo
            </button>
            <button className="text-sm sm:text-lg lg:text-xl text-yellow-400 bg-slate-400 mt-3 rounded p-2" >
              Github
            </button>
           </div>
        </div>

      </Slider>
     {/* </div> */}
    </div>
  );
};

export default SimpleSlider;
