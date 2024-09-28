import React, {useState} from 'react'

function Component(){
    const [car, setCar]=useState({year:"2024",model:"Ford",name:"Mustang"});

    function handleYear(e){
        setCar(c=>({...car,year:e.target.value}));
    }

    function handleModel(e){
        setCar(c=>({...car,model:e.target.value}));
    }
    function handleName(e){
        setCar(c=>({...car,name:e.target.value}));
    }

    return(
        <div>
            <p>
                {car.year+" "}
                {car.model+" "}
                {car.name}
            </p>

            <input type="number" value={car.year} onChange={handleYear} /> <br />
            <input type="text" value={car.model} onChange={handleModel} /><br />
            <input type="text" value={car.name} onChange={handleName} />
        </div>
    );
}

export default Component