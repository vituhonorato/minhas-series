
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.css'
import Generos from "./Generos";
import Series from "./Series";
import Lancamentos from "./Lancamentos";
import NewGenre from "./NewGenre";
import UpdateGenre from "./UpdateGenre";
import NewSerie from "./NewSerie";
import InfoSerie from "./InfoSerie";


function App() {
  
 
  return (
    <div>
    <Router>
      <Header/>
       <Routes>

         <Route exact path="/" element={<Home/>}/>
         <Route exact  path="/generos" element={<Generos/>}/>
         <Route exact  path="/series" element={<Series/>}/>
         <Route  exact path="/generos/novo" element={<NewGenre/>}/>
         <Route  exact path="/series/novo" element={<NewSerie/>}/>
         <Route  exact path="/lancamentos" element={<Lancamentos/>}/>
         <Route  exact path="/generos/:id" element={<UpdateGenre/>}/>
         <Route  exact path="/series/:id" element={<InfoSerie/>}/>
         
       </Routes>
      </Router>
    </div>

  );
}

export default App;
