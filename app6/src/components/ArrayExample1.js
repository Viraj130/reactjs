function ArrayExample1(){
    
    const students = [
        "Viraj Bhatti",
        "yash Singal",
        "Rajiv Sheikh"
    ];

    let op = "";
    for(let i=0; i<students.length; i++){
        op += students[i]+" ";
    }
   
    return<>
    <h1>Example Of Handling Array in React</h1>
    <h1>{op}</h1>
    </>

}

export default ArrayExample1;