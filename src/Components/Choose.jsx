 
import image2 from'../assets/image2.png'
import { MdArrowOutward } from "react-icons/md";

const Choose = () => {
    return ( 
        <div className="w-full py-8 px-4">
            <div className=" max-w-full grid  md:grid-cols-2">
                <div className="w-full h-fit"> 
                 <img src={image2} alt="/" />
                </div>
                <div className='p-4 my-6 mx-auto mt-11 '>
                    <h1 className='text-4xl  font-bold  text-[#323232] p-4'>Choose your material for your furniture</h1>
                    <p className='text-[#323232] p-4'>Furniture materials play a crticial role in determining the overalllook, feel, and durability of any
                         furniture piece. There are a widevariety of materials available, each with its unique properties and 
                         based on their intended use, the desired style.</p>
                         <button className=' flex w-[150px]   font-medium p-2 items-center justify-center bg-[#323232] mt-7 ml-4 text-white '>
                            Explore now  <span className='ml-2 mt-1 '><MdArrowOutward /></span></button>      

                </div>

            </div>

            
        </div>
     );
}
 
export default Choose;