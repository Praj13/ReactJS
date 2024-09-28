import React, {useState} from 'react'


function ColorPicker(){
    const [color,setColor]=useState("#FFFFFF")
    function handleColor(e){
        setColor(e.target.value)
    }
    return(
        <div className='color-picker'>
            <h1>Color Picker here</h1>
            <div className="selected" style={{backgroundColor:color}}>
            <p>Selected color : {color}</p>
            </div>
            <div className='inline'>
           <label htmlFor="color">Select a color:</label>
           <input type="color" value={color} onChange={handleColor} />
           </div>
        </div>
    );
}

export default ColorPicker