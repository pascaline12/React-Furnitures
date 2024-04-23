import { MdArrowOutward } from "react-icons/md";

const Touch = () => {
    return ( 
        <div className="bg-gray-100 w-full ">
            <div className="">
                <h1 className="font-medium text-[#323232] text-2xl p-5">Let's</h1>
                <div className="grid md:grid-cols-2 ">
                    <p className="text-6xl font-medium p-4">Get in touch</p>
                    
                    <button className=' flex w-[90px]  h-7 text-center  items-center justify-center bg-[#323232] mt-7 ml-4 text-white text-sm'>
                            Contact us  <span className='ml-1 mr-2 mb-2 size-[3px]'><MdArrowOutward /></span></button>

                </div>

            </div>

        </div>
     );
}
 
export default Touch;