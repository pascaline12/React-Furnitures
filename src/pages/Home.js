//import Navbar from '../Components/Navbar'
import useFetch from "../Components/UseFetch";
import List from '../Components/List';

const Home = () => {
    const {data:furnitures}= useFetch(' http://localhost:8000/furnitures/');
    return ( 
        <div  className='home bg-gray-500 h-screen justify-between text-center'>
            
           {/* <h1 className="text-4xl text-white font-bold text-center">HOME PAGE</h1> */}

            {furnitures&&<List furnitures={furnitures}  title='All Furnitures on the list ' /*handleDelete={handleDelete}*/ />  }
            

        </div>
     );
}
 
export default Home;