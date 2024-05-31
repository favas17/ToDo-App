import React,{useState} from "react";
function ToDoAdd({addTodo}){

    const [task,setTodods] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(task.trim()){
                addTodo(task)
            setTodods("")
        }
    }

    return(
        <div className="w-full">
            <div className="">
            <h1>Add To Do</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>setTodods(e.target.value)} type="text" placeholder="Add youre To Do"/>
                <button type="submit">Add To Do</button>
            </form>
            </div>
        </div>
    )
}
export default ToDoAdd;