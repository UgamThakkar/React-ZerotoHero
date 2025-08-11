import React from "react";
import ReactDOM from "react-dom/client"
//nested structures using react.
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement(
            "h1",
            {},
            "I'm a nested H1 Tag"
        ),
        React.createElement(
            "h2", 
            {}, 
            "Im a nested H2 tag"
        )]
    )
);

const heading = React.createElement(
    "h1",
    {id:"heading"}, //these are attributes
    "Hello World from React!" //these are children
);

console.log(heading);  // the heading here is an object - a react element its not a h1 tag yet.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //render will convert this element into that h1 tag and put in on the DOM.