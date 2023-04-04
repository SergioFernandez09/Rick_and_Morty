import { useState } from "react";
import Cards from "./Cards";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');
   
   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
