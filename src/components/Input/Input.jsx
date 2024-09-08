import React,{useState} from 'react'
import Styles from "./Input.module.css"
import { addtodo } from '../../features/todoslice'
import {useDispatch} from "react-redux"

function Input() {

    const [todo, SetTodo] = useState(" ")
    const dispatch = useDispatch()

    const add = (e) => {
        e.preventDefault()

        dispatch(addtodo(todo))
        SetTodo(" ")
    }

  return (
   
   <form onSubmit={add}>
    <div className={`${Styles["container"]}`}> 
        <div>
            <input 
                className={`${Styles["input"]}`} 
                type='text' 
                value={todo} 
                placeholder='Todo' 
                onChange={(e) => SetTodo(e.target.value) } 
            />
        </div>
        <div>
            <button className={`${Styles["btn"]}`}>
                Add
            </button>
        </div>
    </div>
    </form>
  )
}

export default Input