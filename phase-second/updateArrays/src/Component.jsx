import React, { useState } from 'react';

function Component(){
    const [fruits, setFruits]=useState(["orange","apple"]);
const addFruits=()=>{
    const newFruit=document.getElementById("new").value;
    document.getElementById("new").value="";
    setFruits(f=>[...fruits,newFruit])
}

    return (
        <div>
            <h1>List of fruits</h1>
            <ul>
                {fruits.map((fruit,index)=><li key={index}>{fruit}</li>)}

                {/* {fruits} */}
            </ul>

            <input type="text" name="" id="new"  placeholder='Enter a new fruit'/>
            <button onClick={addFruits}>Add fruits</button>
        </div>
    );

}

export default Component