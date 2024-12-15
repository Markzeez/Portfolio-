import "./App.css";
import Navbar from "./Component/Navbar";
import About from './Component/About'
import Home from "./Component/Home";
import Skills from "./Component/Skills";
import Work from "./Component/Work";
import Contact from "./Component/Contact";
import LogoSide from "./Component/LogoSide";
import Experience from "./Component/Experience";
import CustomCarousel from "./Page/CustomCarosuel";
import Footer from "./Component/Footer";



function App() {
  return (
    <div className=" ">
      <Navbar />
      <Home/>
      <About/>
      <Experience />
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
      
      {/* <CustomCarousel/> */}
      
      
      
        
    </div>
  );
}

export default App;
