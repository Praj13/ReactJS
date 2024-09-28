import React, {useState} from 'react'
function OnChange(){
    const [name, setName]=useState("");
    const handleName=(event)=>{
        setName(event.target.value);
    }

    return(
        <div>
        <input  value={name} onChange={handleName} />
        <p>{name}</p>
        </div>
    );
}

export default OnChange