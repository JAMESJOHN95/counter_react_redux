import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
// this componant is used to create a store
const counterStore = configureStore({
    reducer:{
        counterReducer:counterSlice
    }
})

export default counterStore

//  provide store to react application--use provide selector