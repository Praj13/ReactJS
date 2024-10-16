import { useState } from "react";
import { useEffect } from "react";

function MyComponent(){
    const [count,setCount]=useState(0);
    const [color,setColor]=useState("green");
    const[width,setWidth]=useState(window.innerWidth)
    const[height,setHeight]=useState(window.innerHeight)

    useEffect(()=>{
        document.title=`Count: ${count} color: ${color}`;
    }, [count,color]);

    function increment(){
        setCount(c=>c+1);
    }

    function decrement(){
        setCount(c=>c-1);
    }
    
    function changeColor(){
        setColor(c=>c==="green"?"red":"green")
    }
    
    useEffect(()=>{
        window.addEventListener("resize",handleChange)
    })

    function handleChange(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    return(
        <div>
        <p style={{color:color}}>Count:{count}</p>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={changeColor}>Change Color</button>

        <p>Width:{width}</p>
        <p>Height:{height}</p>



        </div>
    );
}

export default MyComponent;