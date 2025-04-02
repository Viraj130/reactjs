function PassFunctionInProps(Props){
    return<>
    <h1>Pass Function in Props</h1>
    <button onClick={()=>Props.data("Viraj Yash Rajiv")}>Click me</button>
    </>
}

export default PassFunctionInProps;