function Event2(){

    function greetings(username){
        alert("Welcome to React world "+username);
    }

    return<>
      <h1>Example of Event In React JS</h1>
      <button onClick={()=>greetings("Viraj")}>Click Me</button> 
    </>
}

export default Event2;