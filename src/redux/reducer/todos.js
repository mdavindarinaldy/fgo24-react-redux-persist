import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const todos = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: function(state, action) {
            let result
            if (typeof action.payload.result === 'string') {
                result = action.payload.result
            } else {
                result = ''
            }
            state.data.push({result})
            return state
        },
        removeTask: function(state, action) {
            state.data.splice(action.payload, 1)
            return state
        },
        editTask: function (state, action) {
            const { text, index } = action.payload;
            const result = typeof text === 'string' ? text.trim() : '';
            if (result) {
              state.data.splice(index, 1, { result });
            }
            return state
        },
    }
})

export const {addTask, removeTask, editTask} = todos.actions
export default todos.reducer