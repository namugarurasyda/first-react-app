import {useState} from "react"

export default function Forma(){
    const[name, setName] = useState({firstname: "", lastName: ""});
    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
    }
    return( 
    <div>
        {name.firstname} -{name.lastName}
        <form>
            <input onChange={(e)=>setName({ ...name, firstname:e.target.value})} type="text" value={name.firstname}/>
            <input  onChange={(e)=>setName({...name, lastName:e.target.value})} type="text" value={name.last}/>


        <button onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>
    </div>)
}
