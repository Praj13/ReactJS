import React, {useState} from 'react'
function Counter(){
    const [counter, setCounter]=useState(0)

    function increment(){
        setCounter(counter+1);
    }

    function decrement(){
        setCounter(counter-1);
    }

    function reset(){
        setCounter(0);
    }
    return(
        <>
        <p className='head'>Counter:{counter}</p>
        <div className='main'>
           
            <button onClick={increment}>Increment Counter</button>
            <button onClick={decrement}>Decrement Counter</button>
            <button onClick={reset}>Reset Counter</button>


        </div>
        </>
    );
}

export default Counter