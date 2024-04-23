import about from'../assets/about.png'
import { MdArrowOutward } from "react-icons/md";

const Choose = () => {
    return ( 
        <div className="w-full py-8 px-4">
            <div className=" max-w-full grid  md:grid-cols-2">
                
                <div className='p-4 my-6 mx-auto mt-11 '>
                    <h1 className='text-4xl  font-bold  text-[#323232] p-4'>About</h1>
                    <p className='text-[#323232] p-4'>They key difference between ordinary and special. No matter the season, our spaces are as nuanced as the lifestyles they 
                                       reflect, don’t just dream it.</p>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2'>
                        <div className='text-[#323232]'>
                            <h2 className='font-bold text-3xl py-4 '>300+</h2>
                            <p className='text-sm'>Success project</p>
                        </div>
                        <div className='text-[#323232]'>
                            <h2 className='font-bold text-3xl py-4 '>500+</h2>
                            <p className='text-sm'>Product launches</p>
                        </div>
                        <div className='text-[#323232]'>
                            <h2 className='font-bold text-3xl py-4 '>180K</h2>
                            <p className='text-sm'>Happy customer</p>
                        </div>
                    </div>
                    <button className=' flex w-[150px]   font-medium p-2 items-center justify-center bg-[#323232] mt-7 ml-4 text-white '>
                            About us  <span className='ml-2 mt-1 '><MdArrowOutward /></span></button>      

                </div>
                <div className="w-full h-fit"> 
                 <img src={about} alt="/" />
                </div>

            </div>

            
        </div>
     );
}
 
export default Choose;