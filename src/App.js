import React from "react";
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.css'
import Generos from "./Generos";
import Lancamentos from "./Lancamentos";

function App() {
  
  return (
    <div>
    <Router>
      <Header/>
       <Routes>

         <Route exact path="/" element={<Home/>}/>
         <Route  path="/generos" element={<Generos/>}/>
         <Route  path="/lancamentos" element={<Lancamentos/>}/>

       </Routes>
      </Router>
    </div>

  );
}

export default App;
