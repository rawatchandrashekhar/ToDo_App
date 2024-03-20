import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.list.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.list = state.list.filter((item) => item.id !== action.payload.id);
        },
        updateTodo: (state, action) => {
            state.list = state.list.map((item) => item.id === action.payload.id ? action.payload : item);
        }
    },
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer