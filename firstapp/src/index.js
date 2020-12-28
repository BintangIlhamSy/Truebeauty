//  Import React and ReactDOM Library
import React from "react";
import ReactDOM from "react-dom";

// Create react component
const App = () => {

    const buttonText = ["Click", " ", "Me", " ","Please"];
    const labelText = "Enter name :"
    return (
        <div>
            <label className="labelname" htmlFor="name">{labelText}</label>
            <input id="name" type="text"></input>
    <button style={{backgroundColor:'blue', color:'white'}}>{buttonText}</button>
        </div>
    );
};

// Show Component to screen
ReactDOM.render(
    <App />,
    document.getElementById("root")
);