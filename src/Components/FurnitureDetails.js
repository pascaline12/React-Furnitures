import {  useParams } from "react-router-dom";
import useFetch from "../Components/UseFetch";

const FurnitureDetails = () => {
    const{id}= useParams() //this help to access params id

const {data:furniture}= useFetch(' http://localhost:8000/furnitures/' + id); //to be able to fetch data from thi url
//const history = useHistory();

const handleClick=()=>{
    fetch('http://localhost:8000/furnitures/' + furniture.id, {
        method:'DELETE'
    })
    .then(()=>{
      //  history.push('/');

    })
}
    return ( 
      
        <div className="furniture-details create bg-gray-600 h-screen p-4 ">
            <div className="bg-gray-200 text-[#323232]  text-2xl text-align:center border-2 border-gray-400 w-[400px] px-4 py-4 
            rounded-md mx-auto mb-2">
            {/*<h2>Furniture details - { id }</h2>*/}
            
            {furniture&& (
                <article>
                    <h2 className="text-[25px] font-bold text-[#323232]">{furniture.title}</h2>
                    <p className="text-[20px] text-medium text-[#323232] ">made by {furniture.maker}</p>
                    <div className="text-justify p-2 text-sm ">{furniture.body}</div>
                    <button onClick={handleClick}  className="bg-[#323232] w-[150px] rounded-md font-medium my-6 
        ml-11 md:mx-0 py-2 text-white  text-[20px] border-2 border-black hover:bg-gray-500 hover:text-white">DELETE</button>
                </article>
            )}
            </div>
        </div>


     );
}
 
export default FurnitureDetails;