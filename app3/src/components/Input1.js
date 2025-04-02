import { useState } from "react";


function Input1(){
    let[fname, setFname] = useState("");
    return<>
    <h1>Example of Input in React JS</h1>


    <input type="text" onChange={(e)=> setFname(e.target.value)} />
    <h1>Welcome {fname}</h1>
    </>
}

export default Input1;