import './App.css';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Home from './Component/Home';
import Skills from './Component/Skills';
// import Work from "./Component/Work";
import Contact from './Component/Contact';
// import LogoSide from "./Component/LogoSide";
import Experience from './Component/Experience';
import SimpleSlider from './Component/SimpleSlider';
import Footer from './Component/Footer';
// import CustomCarousel from "./Page/CustomCarosuel";
// import Scroll from './Component/Scroll';


function App() {
  return (
    <div className=" ">
      <Navbar />
      <Home />
      <About />
      <Experience />
      {/* <Scroll/> */}
      <Skills />
      {/* <Work/> */}
      <SimpleSlider />
      {/* <CustomCarousel/> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
