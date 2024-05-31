
function ToDoList({todo,removeTodo}){

    return(
        <div className="text-white">
            <table className="">
                <thead>
                    <tr>
                        <th className="fields">ToDo</th>
                        <th className="fields">Status</th>
                        <th className="fields">Remove</th>
                    </tr>
                </thead>
                <tbody>

                {todo.map(todos=>(
                    <tr key={todos.id}>
                        <td className="fields">{todos.task}</td>
                        <td className="fields"><button>Completed</button></td>
                        <td className="fields"><button onClick={()=>removeTodo(todos.id)}>Remove</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default ToDoList