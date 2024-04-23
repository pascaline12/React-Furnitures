import { Link } from "react-router-dom";

const List = ({furnitures,title}) => {
    
    return ( 
        <div className="list">
            <h2 className="text-center p-3 font-bold text-3xl text-white mt-8 border-b ">{title}</h2>
            {furnitures.map((furniture)=> (
                <div className="list-preview" key={furniture.id}>
                  
                    <Link to={`/furnitures/${furniture.id}`}>
                     <h2 className="text-[25px] font-medium p-2 text-white">{ furniture.title }</h2>
                     <p className="text-[20px]  p-4 text-white">made by { furniture.maker }</p>
                    </Link>
                    </div>
            ))}
            
        </div>
     );
}
 
export default List;