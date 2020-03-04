import React from "react";
import ReactDOM from "react-dom";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import Heroes from "./components/Heroes";

//Creating a variable with an html tag ---> JSX
//const firstElement = <h1>Hello World</h1>
//Show the Element on the browser ---> it is adding to tag with id in public folder-> index.html -> "root"
ReactDOM.render(<Heroes />, document.getElementById("root"));