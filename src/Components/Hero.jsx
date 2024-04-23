import image1 from '../assets/image1.png'
import { MdArrowOutward } from "react-icons/md";
import {Link} from 'react-router-dom';

const Hero = () => {
    return ( 
      <div className='w-full h-screen bg-{image1}'>
          <div className=' ml-6 mr-6 mx-auto '>
            <img className='top-0 left-0 w-full h-screen mx-auto  bg-cover' src={image1} alt="/" />
           
            {/*< div className='bg-gray/30 absolute w-full  left-0 top-0 '/>*/}
            <div className='absolute top-0 w-full  my-60 p-4 '>
                <h1 className=' text-[#323232] font-bold text-4xl p-4'>Discover the <br></br>best Furnitures</h1>
                <p className='text-gray-500 p-4'>It provides a place to sit, sleep, eat, work, and store belongings.<br></br> Without furniture, 
                    a room would be much less <br></br>functional and comfortable.
                  </p>

                <button className=' flex w-[150px]   font-medium p-2 items-center justify-center bg-[#323232] mt-7 ml-4 text-white '>
                <Link to="/create">Explore now </Link> <span className='ml-2 mt-1 '><MdArrowOutward /></span></button>  

            </div>
             
        
        </div>
      </div>
     );
}
 
export default Hero;