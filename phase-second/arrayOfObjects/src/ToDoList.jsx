import React, {useState} from 'react'

function ToDoList(){
    const [tasks, setTasks]=useState(["Eat breakfast","Take a nap"])
    const [newTasks, setNewTasks]=useState("")

    function handleInputChange(event){
        setNewTasks(event.target.value)
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }
     function moveTaskDown(index){
        
    }

    return(
        <div className='to-do-list'>
            <h1>To Do List</h1>
            <div>
                <input type="text" name="" id="" value={newTasks} onChange={handleInputChange} />
                <button onClick={addTask}>Add task</button>
            </div>
            <ol>
                {tasks.map((task,index)=><li key="index">{task}</li>)}
            </ol>
        </div>
    );

}