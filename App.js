import React from "react";
import ReactDOM from "react-dom/client"


//React Components -  these are just javascript functions that return JSX.
const Heading = () =>{
    return <h1>First way to write react Components</h1>
}

const Heading2 = () =>(
    <h1>First way to write react Components</h1>
)

const Heading3 = () => <h1>Third way to write react Components</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />); 