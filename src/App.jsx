import "./App.css";
import Navbar from "./Component/Navbar";
import About from './Component/About'
import Home from "./Component/Home";
import Skills from "./Component/Skills";
import Work from "./Component/Work";
import Contact from "./Component/Contact";


function App() {
  return (
    <div className=" ">
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      
        
    </div>
  );
}

export default App;
