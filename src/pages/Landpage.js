
import React from "react";

//import Navbar from "./Components/Navbar";
import Hero from "../Components/Hero";
import Company from "../Components/Company";
import Choose from "../Components/Choose";
import Provide from "../Components/Provide";
import Products from "../Components/Products";
import About from "../Components/About";
import Touch from "../Components/Touch";
//import Footer from "./Components/Footer";
//import{BrouserRouter, Routes, Route} from 'react-router-dom'
//import{Home} from'./pages'
//import Home from './pages/Home';



function Landpage() {
return (
<div className="landpage">

 
  <Hero/>
  <Company/>
  <Choose/>
  <Provide/>
  <Products/>
  <About/>
  <Touch/>
  

 

</div>


);
}

export default Landpage;
