import { Component } from "react";


class PureComponentEx1 extends Component{
    constructor(){
        super();

        this.state = {
            counter : 1
        }
    }

    render(){
        console.log("Render FUnction Called");
        return<>
        <h1>Example of Pure Component</h1>
        <button onClick={()=>this.setState({counter: 10})}>Update</button>
        </>
    }
}

export default PureComponentEx1;