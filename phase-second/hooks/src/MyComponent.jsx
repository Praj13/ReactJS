
import React, {useState} from 'react';

function MyComponent(){
    const [name, setName]=useState();
    const [age, setAge]=useState(0);
    const [isEmployed, setisEmployed]=useState(true);



    const updateName=()=>{
        setName("Praj")
    }
    const updateAge=()=>{
        setAge(age+1);
    }
    const toggleStatus=()=>{
        setisEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age:{age}</p>
            <button onClick={updateAge}>Increment Age</button>

            <p>Employed?:{isEmployed?"yes":"no"}</p>
            <button onClick={toggleStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent