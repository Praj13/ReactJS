import { UserContext } from "./ComponentA.jsx";
import ComponentD from "./ComponentD.jsx";
import React, { useContext } from "react";


function ComponentC(){
    const User=useContext(UserContext)
    return(
        <div className="box">
            <h1>Component C</h1>
            <h2>Hello {User}</h2>
            <ComponentD/>
            

        </div>
    );
}
export default ComponentC