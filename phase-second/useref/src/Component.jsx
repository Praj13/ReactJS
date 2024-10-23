import React, {useRef, useEffect, useState} from "react";
function Component(){
  
    useEffect(() => {
      console.log("rendered")
    })
   
    
    const ref=useRef(null);
    const ref1=useRef(null);
    const ref2=useRef(null);
    function handleClick(){
        ref.current.focus();
        ref.current.style.backgroundColor="green"
        ref1.current.style.backgroundColor=""
        ref2.current.style.backgroundColor=""


        
     }
 
     function handleClick1(){
        ref1.current.focus();
        ref.current.style.backgroundColor=""
        ref1.current.style.backgroundColor="green"
        ref2.current.style.backgroundColor=""
        
     }
 
     function handleClick2(){
        ref2.current.focus();
        ref.current.style.backgroundColor=""
        ref1.current.style.backgroundColor=""
        ref2.current.style.backgroundColor="green"
        
        
 
        
     }

    return (
        <div>
            <button onClick={handleClick}>click me</button>
            {/* <p>{ref.current}</p> */}
            <input type="text" ref={ref} />

            <button onClick={handleClick1}>click me</button>
            {/* <p>{ref.current}</p> */}
            <input type="text" ref={ref1} />

            <button onClick={handleClick2}>click me</button>
            {/* <p>{ref.current}</p> */}
            <input type="text" ref={ref2} />
        </div>
    );

}
export default Component