const { useState } = require("react");


function ChildComponent1(Props){
   
    let[username, setUsername] = useState("Viraj Bhatti");
    return<>
       <h1>ChildComponent</h1>  
       <button onClick={()=>Props.greet(username)}>Click Me</button> 
    </>
}

export default ChildComponent1;