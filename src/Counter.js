
import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(1)
    function inc () {
        setCount(
            function(oldCount){
                return oldCount + 1
            }
        )
        console.log(count)
    }
    function Reset () {
        setCount(
            function(oldCount){
                return 1
            }
        )
        console.log(count)
    }
    return (
      <div> 
        <h1> Counter</h1>
        <p>Counter is at {count} </p>
        
        <button onClick={inc}> Click to add 1 to Counter</button>
        <p> 
        <button onClick={Reset}> Click to reset the Counter</button>
        </p>
      </div>
    );
  }
  
  export default Counter;
  