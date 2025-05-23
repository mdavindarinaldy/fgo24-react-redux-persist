import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const todos = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: function(state, action) {
            state.data.push({
                ...action.payload
            })
            return state
        },
        removeTask: function(state, action) {
            state.data.splice(action.payload, 1)
            return state
        },
        editTask: function(state, action) {
            const {text, index} = action.payload
            console.log(index)
            console.log(text)
            // state.data.splice(index, 0, {'result': text})
        }
    }
})

export const {addTask, removeTask, editTask} = todos.actions
export default todos.reducer