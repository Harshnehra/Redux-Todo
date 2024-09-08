import {createSlice , nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos: [{id:" ", text:"Todo using Redux"}]
}

export const todoslice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addtodo: (state, actions) => {
            const todo = {
                id: nanoid(),
                text: actions.payload
            }
            state.todos.push(todo)
        },
        deletetodo: (state, actions) => {
            state.todos = state.todos.filter((todo) => 
                todo.id !== actions.payload
            )
        }
    }
})

export const {addtodo, deletetodo} = todoslice.actions

export default todoslice.reducer
