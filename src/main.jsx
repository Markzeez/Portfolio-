import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter, Routes,Route } from "react-router-dom";
import Work from "./Component/Work.jsx";

function main (){
  <BrowserRouter>
  <Routes>
  <Route path="work" element={<Work/>}/>
  </Routes>
  </BrowserRouter>
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <App/>
  </React.StrictMode>
);

export default main;