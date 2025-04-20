import {useState} from "react"
export default function Form(){
    const[name, setName] = useState("");
    function handleChange(e){
        setName(e.target.value);
    }
    return(
    <div> 
        <form>

 {/* onChange={function demo(e){
   return handleChange(e);
 }} */}
<input onChange={(e)=>handleChange(e)} type="text" value={name} />  
{/* or we can use  onChange={(e)=>setName(e.target.value)} instead of a function */}



        </form>
        
    
    
    </div>
    );
}