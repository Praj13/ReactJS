import React, {useState} from "react";
function Component(){
    const [cars, setCars]=useState([]);
    const [carYear, setYear]=useState(new Date().getFullYear())
    const [carMake, setMake]=useState("");
    const [carModel, setModel]=useState("");

    function addCar(){
        const newCar={year:carYear,
                    make:carMake,
                    model:carModel
                     }
        setCars(c=>[...cars,newCar])
        setYear(new Date().getFullYear())
        setMake("")
        setModel("")
    }

    function addYear(event){
        setYear(event.target.value)
      
    }

    function addMake(event){
        setMake(event.target.value)
     

    }

    function addModel(event){
        setModel(event.target.value)
        document.getElementById("model").value="";

    }




    return(
        <div>
            <h1>List of cars</h1>
            <ul>
           {cars.map((car,index)=><li key={index}>
            {car.year}
            {car.make}
            {car.model}
            </li>)}
            </ul>
            year
            <input type="number" name="year" id="year" value={carYear} placeholder="Year" onChange={addYear} />
            make
            <input type="text" name="make" id="make" placeholder="make" value={carMake} onChange={addMake} />
            model
            <input type="text" name="model" id="model" placeholder="model" value={carModel} onChange={addModel}/>
            <button onClick={addCar}>Add a car</button>

        </div>
    );


}

export default Component