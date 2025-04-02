import React from "react";

function Sample4(){
    // with JSX
    /*
       return<>
       <h1>Welcome to world of react components</h1>
    </>*/

    // without JSX
    return React.createElement("h1", null, "Welcome to React components");
}

export default Sample4;