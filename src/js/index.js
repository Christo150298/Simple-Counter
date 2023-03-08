//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Contador from "./component/Contador.jsx";

//render your react application
ReactDOM.render(<Contador />, document.querySelector("#app"));
