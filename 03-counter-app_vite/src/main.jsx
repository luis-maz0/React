import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
//import { HelloWorldApp } from "./HelloWorldApp";
import "./styles.css";
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot( document.querySelector("#root")).render( 
    <React.StrictMode>
        {/* <FirstApp saludo="Titulo"/> */}
        <CounterApp value={ 100 }/>
    </React.StrictMode>
)