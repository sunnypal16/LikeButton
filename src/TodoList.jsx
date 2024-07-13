    import { v4 as uuidv4 } from 'uuid';
    import { useState } from "react";


    function TodoList(){
        const [todos, setTodos] = useState([{task: "smaple-task", id: uuidv4()}]);
        const [newTask, setNewTak] = useState("");

        let addNewTask=()=>{
            setTodos((prevTodos)=>{
                return [...prevTodos,{task:newTask, id: uuidv4() }]
            })
            setNewTak("")
        }

        let updateTodoValue=(event)=>{
            setNewTak( event.target.value)
        }


        let deleteTodo =(ravi)=>{
            setTodos(todos.filter((sunny)=>{
                return sunny.id !== ravi
            }))
        }

        let updateAll=()=>{
            setTodos(todos.map((sunny)=>{
                return {...sunny, task:sunny.task.toUpperCase()}
            }))
        }

        let UpperCaseOne=(ravi)=>{
            setTodos(todos.map((sunny)=>{
                return sunny.id === ravi ? {...sunny, task:sunny.task.toUpperCase()}: sunny
            }))
        }

        
            return(
            <>
            <div>
            <input 
                type="text" 
                placeholder="Write task here"
                value={newTask}  
                onChange={updateTodoValue}/>
            <br /><br />

            <button onClick={addNewTask}>Add</button>
            
            <br /><br /><br />
            <hr />

            <ul>
                {todos.map((todo)=>{
                    return <li key={todo.id}>
                            <span>{todo.task}</span> &nbsp; &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>delete</button>&nbsp;
                            <button onClick={()=>UpperCaseOne(todo.id)}>UpperCase</button>
                        </li>
                    })}
            </ul>
            <button onClick={updateAll}>updateAll</button>
            </div>

            </>
        )
    }

    export default TodoList