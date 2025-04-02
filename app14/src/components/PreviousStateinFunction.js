const { useState } = require("react");


function PreviousStateinFunction() {
    let[count, setCount] = useState(0);
    return<>
    <h1>Value of Count is{count}</h1>
     <button onClick={()=>setCount((previous) => {
        console.log("previous Value is "+previous);
        return Math.ceil(Math.random() * 10);
     })}>Update</button>
    </>
}


export default PreviousStateinFunction;