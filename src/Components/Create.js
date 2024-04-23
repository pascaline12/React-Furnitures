import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle]= useState('');
    const [body, setBody] = useState('');
    const [maker, setMaker] = useState('Marry');
    //const history= useHistory()


    const handleSubmit = (e) => {
        e.preventDefault();
        const furniture = { title, body, maker };

        //setIsPending(true);

        fetch('http://localhost:8000/furnitures/', {
         method: 'POST',
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(furniture)
        })
    .then(() => {
      console.log('new item added');
      
      //history.go(-1);
      //history.push('/');  //it push you to the exact Route ,here is Home

    
    })

    }

    return ( 
        <div className="create bg-gray-600">
            <h2 className="text-center p-3 font-medium text-2xl text-white">Add a new furniture</h2>

            <div className="bg-gray-200 text-[#323232] text-2xl text-align:center border-2 border-gray-400 w-[400px] px-4 py-4 
            rounded-md mx-auto mb-2">
            
            <form onSubmit={handleSubmit} > 
        <label className=" font-medium text-align-left text-[20px]">Add title:</label><br/>
        <input 
          className="w-[340px] py-2 px-4 mb-4 rounded-md"
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}/><br/>

        <label className=" font-medium text-align-left text-[20px]"> Description:</label><br/>
        <textarea
          className="w-[340px] py-2 px-4 mb-4 rounded-md"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br/>

        <label className=" font-medium text-align-left text-[20px] ">Furniture maker:</label><br/>
        <select
          className="rounded-md w-[340px] py-2 px-4 mb-4 "
          value={maker}
          onChange={(e) => setMaker(e.target.value)}>

          <option value="Marry">Marry</option>
          <option value="Pascaline">Pascaline</option>
        </select><br/>
        <button className="bg-[#323232] w-[150px] rounded-md font-medium my-6 
        ml-11 md:mx-0 py-2 text-white  text-[20px] border-2 border-black hover:bg-gray-500 hover:text-white">Add New</button>
       

      </form>
      </div>
      
        </div>

    
     );
}
 
export default Create;