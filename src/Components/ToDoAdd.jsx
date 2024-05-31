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
        <div className="">
            <div className="">
            <h1 className="font-bold">Add To Do</h1>
            <form onSubmit={handleSubmit}>
                <input className="outline-none bg-gray-300 rounded-sm" onChange={(e)=>setTodods(e.target.value)} type="text" placeholder="Add youre To Do"/>
                <button className="bg-red-500 rounded-sm" type="submit">Add To Do</button>
            </form>
            </div>
        </div>
    )
}
export default ToDoAdd;