import microsoft from'../assets/microsoft.png'
import decor from'../assets/decor.png'
import urbaninterior  from'../assets/urbaninterior.png'
import hookerfurnishings from'../assets/hookerfurnishings.png'
import bassett from'../assets/bassett.png'


const Company = () => {
    return (  
        <div className="w-full  text-[#323232] px-4  ">
            <div className='p-4 max-w-[1000 px] align-middle '>
            <p className='max-w-400'><p className=" p-2 text-center  text-[#323232] mb-3">TRUSTED BY OVER 1K+ COMPANIES</p></p>
            
            <div className=" grid grid-cols-5  ">
                <img className='size-[90px]  ml-11 pb-6' src={microsoft} alt="/" />
                <img className='size-[50px]  ml-11' src={decor} alt="/" />
                <img className='size-[50px]  ml-11' src={urbaninterior} alt="/" />
                <img className='size-[50px]  ml-11' src={hookerfurnishings} alt="/" />
                <img className='size-[50px]  ml-11 ' src={bassett} alt="/" />
            </div>

            </div>
           

        </div>
    );
}
 
export default Company;