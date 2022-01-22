import React from "react";
//import { ReactDOM } from "react";
import ComA from "./ComA";
import ComB from "./ComB";
import { Routes , Route } from "react-router-dom";

const App = () => {
  return(
    <>
    <Routes>
    <ComA/>
    <ComB/>

    </Routes>
    
    
    </>
  );
}
export default App;