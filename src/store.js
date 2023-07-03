import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; //importing the default export from counterSlice.js

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
