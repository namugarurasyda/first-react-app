import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [incrementBy, SetIncrementBy] = useState(1);
    function increment(){
        setCount(count + incrementBy);   
     }

    
     function decrement(){
        setCount(count -incrementBy);
     }
     function increaseIncrement(){
        SetIncrementBy(incrementBy + 1);
     }
     function decreasedecrement(){
        SetIncrementBy(incrementBy - 1);
     }
    return(
    <div>
        <h1>Count value is:{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <h1> We are incrementing the value by:{incrementBy}</h1>
        <button onClick={increaseIncrement}>Increase Increment</button>
        <button onClick={decreasedecrement}>Decrease Increment</button>
        
    
    </div>
    );
}