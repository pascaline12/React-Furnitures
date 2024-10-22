import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'



const Products = () => {
    return ( 
        <div className="w-full px-4 py-16 sm:h-[50%]">
            <div className='grid grid-cols-3  text-[#323232]'>
                <h2 className='text-2xl font-bold p-2 '>Discover Product</h2>
                <p></p>
                <p className='text-sm text-left'>As it involves exploring and learning about<br></br> various options 
                    available in the market</p>
            </div>
            <div className=" mx-auto grid md:grid-cols-4 gap-4 ">
                <div className="w-full shadow-xl flex flex-col p-2 my-4 rounded-lg hover:scale-105 duration-300 gri grid-rows-2 ">
                    <div >
                    <img className=' w-full mx-auto p-2 bg-white' src={product1} alt="/" />
                    </div>
                    <div>
                       <h2 className='text-2xl font-bold  py-4'>Wood Beside Table</h2>
                       <p className='text-16px'>Ang you can choose according to your room 
                        prederence and comfort</p>
                       <p className=' font-bold text-4 text-red-500 pt-4'>$213.000</p>
                    </div>
                    
                </div>

                <div className="w-full shadow-xl flex flex-col p-2 my-4 rounded-lg hover:scale-105 duration-300 gri grid-rows-2 ">
                    <div >
                    <img className=' w-full mx-auto p-2 bg-white' src={product2} alt="/" />
                    </div>
                    <div>
                       <h2 className='text-2xl font-bold  py-4'>Rattan Armchair</h2>
                       <p className='text-16px'>In a variety of sizes and materials to suit your
                          taste and style</p>
                       <p className=' font-bold text-4 text-red-500 pt-4'>$90.000</p>
                    </div>
                    
                </div>
                <div className="w-full shadow-xl flex flex-col p-2 my-4 rounded-lg hover:scale-105 duration-300 gri grid-rows-2 ">
                    <div >
                    <img className=' w-full mx-auto p-2 bg-white' src={product3} alt="/" />
                    </div>
                    <div>
                       <h2 className='text-2xl font-bold  py-4'>Velvet Doff Gray</h2>
                       <p className='text-16px'>They are available in a variety of comtemporary designs</p>
                       <p className=' font-bold text-4 text-red-500 pt-4'>$33.000</p>
                    </div>
                    
                </div>
                <div className="w-full shadow-xl flex flex-col p-2 my-4 rounded-lg hover:scale-300 duration-100 gri grid-rows-2 ">
                    <div >
                    <img className=' w-full mx-auto p-2 ' src={product4} alt="/" />
                    </div>
                    <div>
                       <h2 className='text-2xl font-bold  py-4'>Lamp Beside</h2>
                       <p className='text-16px'>In a variety of sizes and materials to suit your taste and style</p>
                       <p className=' font-bold text-4 text-red-500 pt-4'>$33.000</p>
                    </div>
                    
                </div>

            </div>

        </div>
     );
}
 
export default Products;