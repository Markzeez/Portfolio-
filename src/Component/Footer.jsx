import { BiArrowToTop } from "react-icons/bi";

const Footer = () => {
    return (
      <footer className=" text-yellow-400 py-6 bg-[#090503] ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
       
         {/* Social Media Icons */}
         <div className="flex space-x-4 mt-4 md:mt-0">
            {/* <a href="#" aria-label="Facebook">
              <svg
                className="w-6 h-6 fill-current hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.483v-9.294H9.847v-3.622h2.961V8.413c0-2.935 1.793-4.537 4.413-4.537 1.252 0 2.328.093 2.642.135v3.066h-1.81c-1.42 0-1.694.674-1.694 1.664v2.183h3.388l-.441 3.622h-2.947V24h5.788c.731 0 1.325-.593 1.325-1.324V1.325C24 .593 23.406 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg
                className="w-6 h-6 fill-current hover:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.86 9.86 0 01-3.127 1.195 4.917 4.917 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475 4.917 4.917 0 002.188 4.1A4.904 4.904 0 01.96 9.097v.062a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.21.084 4.917 4.917 0 004.6 3.417A9.867 9.867 0 010 19.54a13.924 13.924 0 007.548 2.209c9.055 0 14.004-7.502 14.004-14.004 0-.213-.005-.425-.014-.637A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a> */}
          </div>
       
          {/* Logo/Brand */}
          <div className="text-xs font-bold">
            © 2024 Markzeez.
          </div>
  
          {/* Navigation Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#top" className="rounded-full w-[30px] h-[30px] ">
              <BiArrowToTop size={20}/>
            </a>
           
          </div>
  
          
        </div>
      </footer>
    );
  };
  
  export default Footer;
  