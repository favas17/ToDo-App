import ToDoList from "../Components/ToDoList"
import ToDoAdd from "../Components/ToDoAdd"
import { useState } from "react"
function TodoPage(){

    const [todo,setTodo] = useState([])
    console.log(todo)
    // function for adding the todo
    const addTodo = (task)=>{
        setTodo([
            ...todo,
            {id:Date.now(),task,completed:false}
        ])
    };

    // function for removing todo
    const removeTodo = (id)=>{
        setTodo(
            todo.filter((todo)=>todo.id !== id)
        )
    }

    return(
        <div className="flex w-full">
            <h1>
                Todo App
            </h1>
            <div className="">
            <ToDoAdd addTodo={addTodo} />
            </div>
            
            <div className="">
            <ToDoList todo={todo} removeTodo={removeTodo}/>
            </div>
           
            <div>

            </div>
        </div>
    )
}
export default TodoPage