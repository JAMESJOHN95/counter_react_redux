import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        Increment: (state) => {
            state.count++
        },
        Decrement: (state) => {
            state.count--
        },
        reset: (state) => {
            return {
                ...state, count: 0 // legal format(dont give as state = 0) count defined above
            }
        },
        incrementByAmount: (state, action) => {
            state.count += +action.payload

        }
    }
})

export const {Increment,Decrement,reset,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer