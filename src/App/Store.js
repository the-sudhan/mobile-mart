import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/Counter/counterSlice';

export const Store = configureStore({
    reducer:{
        counter:counterReducer
    }
})