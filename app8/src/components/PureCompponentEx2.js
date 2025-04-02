import { Component, PureComponent } from "react";


class PureComponentEx2 extends PureComponent {
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
        <h1>Counter is {this.state.counter} </h1>
        <button onClick={()=>this.setState({counter: Math.ceil(Math.random() * 10)})}>Update</button>
        </>
    }
}

export default PureComponentEx2;