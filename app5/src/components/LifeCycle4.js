const { Component } = require("react");


class LifeCycle4 extends Component{
    constructor(){
        super();
        console.log("Constructor Life Cycle Method Called");

        this.state = {
            counter: 1
        }
    }

    render(){
        console.log("Render Life Cycle Method Called");
        return<>
        <h1>Example of Life Cycle Methods of React JS</h1> 
        <h1>Value of Counter is {this.state.counter}</h1>
        <button onClick={()=>this.setState({counter: this.state.counter+1})}>Update Counter</button>
        </>
    }

    componentDidMount(){
        console.log("Component Did Mount LifeCycle Method Called");
    }

    componentDidUpdate(){
        console.log("Component Did Update Life Cycle Method Called");
    }

    shouldComponentUpdate(){
        console.log("Should Component Update Life Cycle Method Called");
        return true;
    }
}

export default LifeCycle4;