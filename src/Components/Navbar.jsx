import React, {useState}from 'react';
import { IoIosClose } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";

import {Link} from 'react-router-dom';

const Navbar = () => {
    const [nav,setNav]= useState(false)

    const handleNav=()=>{
        setNav(!nav);
    }

    return (  
        <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#323232]">
            <h1 className="w-full text-3xl font-bold ">Furte</h1>
            <ul className=" hidden md:flex">
                <li className="p-4 hover:bg-black hover:text-white mt-5 ">   <Link to="/home">Home</Link> </li>
                <li className="p-4  hover:bg-black hover:text-white mt-5"><Link to="/about2">About</Link></li>
                <li className="p-4  hover:bg-black hover:text-white mt-5">Pricing</li>
                <li className="p-4  hover:bg-black hover:text-white mt-5">FAQ</li>
                <li> <button className=' flex w-[120px]   font-medium py-2 items-center justify-center bg-black mt-7 ml-4 text-white'>Contact us  <span><MdArrowOutward /></span></button></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'> 

                { nav ?<IoIosClose size={30}/>: <BiMenuAltRight size={30} />    /* show close line else give menu*/}
              
            </div>
            
            <div  className={ nav ? 'fixed left-0 top-0 w-[60%] h-full  bg-white ease-in-out duration-500': 'fixed left-[-100%] '}>
            <h1 className="w-full text-3xl font-bold text-black m-4">Furte</h1>
            <ul className='pt-12 uppercase p-4 md:hidden'>
                <li className="p-4 border-b border-gray-600 hover:text-gray-700">Home</li>
                <li className="p-4 border-b border-gray-600 hover:text-gray-700">About</li>
                <li className="p-4 border-b border-gray-600 hover:text-gray-700">Pricing</li>
                <li className="p-4 border-b border-gray-600 hover:text-gray-700">FAQ</li>
                <li> <button className=' flex w-[120px]   font-medium py-2 items-center justify-center bg-black mt-7 ml-4 text-white '>Contact us <span><MdArrowOutward /></span></button></li>
            </ul>
            </div>

        
        </div>
      
    );
}
 
export default Navbar;