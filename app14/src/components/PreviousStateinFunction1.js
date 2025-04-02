const { useState, useRef, useEffect } = require("react");


function PreviousStateinFunction1(Props) {
   const lastValue = useRef();
    
   useEffect(()=> {
    lastValue.current = Props.count;
   });

   const previousValue = lastValue.current;
    return<>
     <h1>Previous Value is {previousValue}</h1>
     <h1>Value of Count is {Props.count}</h1>
    </>
}


export default PreviousStateinFunction1;