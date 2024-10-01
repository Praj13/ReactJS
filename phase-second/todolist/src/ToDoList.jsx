import React, {useState} from 'react'

function ToDoList(){
    const [tasks, setTasks]=useState(["Eat breakfast","Take a nap","Call for the appointment"])
    const [newTasks, setNewTasks]=useState("")

    function handleInputChange(event){
        setNewTasks(event.target.value)
    }

    function addTask(){
        if(newTasks.trim() !==""){
            setTasks((t=>[...t,newTasks]))
            setNewTasks("")
        }
        else{
            alert("Please enter a task first.")
        }
       

    }

    function deleteTask(index){
        const updatedTasks=tasks.filter((_,i)=>i!==index)
        setTasks(updatedTasks);s
    }

    function moveTaskUp(index){
        const updatedTask=[...tasks];
        [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]]
        setTasks(updatedTask)

    }
     function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]]
            setTasks(updatedTask)
        }
    }

    return(
    
        <div className='to-do-list'>
            <h1>To Do List</h1>
            <div className='input'>
                <input type="text" name="" id="" value={newTasks} onChange={handleInputChange} />
                <button className='add-button' onClick={addTask}>Add task</button>
            </div>
            <ol>
              {tasks.map((task,index)=>(<li key={index}><span className="text"> {task}</span>  
              <div className="buttons">
                <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={()=>moveTaskUp(index)}>👆</button>
                <button className="move-button" onClick={()=>moveTaskDown(index)}>👇</button>
                </div>
                </li>))}
               
            </ol>
        </div>
    
    );
    
}

export default ToDoList