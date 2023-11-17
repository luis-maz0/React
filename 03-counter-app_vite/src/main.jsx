import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";


ReactDOM.createRoot( document.querySelector("#root")).render( 
    <React.StrictMode>
        <HelloWorldApp/>
    </React.StrictMode>
)