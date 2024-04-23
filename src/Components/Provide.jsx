import ellipse1 from '../assets/ellipse1.png'
import ellipse2 from '../assets/ellipse2.png'
import ellipse3 from '../assets/ellipse3.png'

const Provide = () => {
    return (  
        <div className="w-full px-4 py-4 bg-gray-100">
            <div><h2 className='font-bold py-4 ml-4'>What do we provide to you?</h2></div>
            <div className=" max-w-[1240px] grid lg:grid-cols-4 sm:grid-cols-2 gap-4 ">
                <div className='p-4'>
                    <img className='size-[25px] fixed-left mt-0 ml-0 mb-4' src={ellipse1} alt="/" />
                    <h2 className='font-bold  '> Free Services</h2>
                    <p className='py-4 w-15 text-sm'>These are services that offer a basic 
                      free version of their product with limited fatures.</p>
                </div>
                <div className='p-4'>
                    <img className='size-[25px] fixed-left mt-0 ml-0 mb-4' src={ellipse2} alt="/" />
                    <h2 className='font-bold  '> Payment Method</h2>
                    <p className='py-4 w-15 text-sm'>Transferring money from one bank account to another.
                     This can be done through online banking</p>
                </div>
                <div className='p-4'>
                    <img className='size-[25px] fixed-left mt-0 ml-0 mb-4' src={ellipse3} alt="/" />
                    <h2 className='font-bold  '> Warranty</h2>
                    <p className='py-4 w-15 text-sm'>This type warranty is explicitly stated by the manufacturer or
                     seller, either in writing or verbally</p>
                </div>
                <div className='p-4'>
                    <img className='size-[25px] fixed-left mt-0 ml-0 mb-4' src={ellipse3} alt="/" />
                    <h2 className='font-bold  '> Return Policy</h2>
                    <p className='py-4 w-15 text-sm'>Most return policies include a timeframe during which customers 
                      can initiate a return</p>
                </div>

            </div>

        </div>
    );
}
 
export default Provide;