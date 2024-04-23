
import React from "react";
import Navbar from "./Components/Navbar";
/*import Hero from "./Components/Hero";
import Company from "./Components/Company";
import Choose from "./Components/Choose";
import Provide from "./Components/Provide";
import Products from "./Components/Products";
import About from "./Components/About";
import Touch from "./Components/Touch";*/
import Footer from "./Components/Footer";
import{BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import About2 from './pages/About2';
import Landpage from './pages/Landpage';

import Create from './Components/Create';
import FurnitureDetails from './Components/FurnitureDetails';



function App() {
  return (
    
    
         <div>

<BrowserRouter>
  <Navbar/>
  <Routes>

    <Route  exact path="/" element={<Landpage/>}/>
    <Route   path="/home" element={<Home/>}/> 
    <Route  path="/about2" element={<About2/>}/>

    <Route path='/create' element={ <Create/>}/> 

    <Route path='/furnitures/:id' element={<FurnitureDetails/>}/>
            
         

  </Routes>
  
  <Footer/>
    

</BrowserRouter>

</div>
    
  );
}

export default App;
