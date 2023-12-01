import "./App.css";
import Navbar from "./Component/Navbar";
import About from './Component/About'
import Home from "./Component/Home";
import Skills from "./Component/Skills";
import Work from "./Component/Work";


function App() {
  return (
    <div className=" ">
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      
        
    </div>
  );
}

export default App;
