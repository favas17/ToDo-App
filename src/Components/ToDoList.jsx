
function ToDoList({todo,removeTodo}){

    return(
        <div className="">
            <table>
                <thead>
                    <tr>
                        <th>ToDo</th>
                        <th>Status</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>

                {todo.map(todos=>(
                    <tr key={todos.id}>
                        <td>{todos.task}</td>
                        <td><button>Completed</button></td>
                        <td><button onClick={()=>removeTodo(todos.id)}>Remove</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default ToDoList