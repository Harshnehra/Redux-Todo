import React from 'react'
import Styles from "./TodoList.module.css"
import { useDispatch,useSelector } from 'react-redux'
import { deletetodo} from '../../features/todoslice'

function TodoList() {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    
  return (
    <>
        { todos.map((todo) => (
            <div key={todo.id} className={`${Styles["container"]}`}> 
                <input 
                    className={`${Styles["input"]}`} 
                    value={todo.text}
                    readOnly
                />
    
                <button 
                    className={`${Styles["delete-btn"]}`}
                    onClick={() => {dispatch(deletetodo(todo.id))}}
                >
                    Delete
                </button>
            </div>
        ))}
    </>
  )
}

export default TodoList