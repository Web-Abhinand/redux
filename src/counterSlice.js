import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

//creating a slice
const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        //action1
        increment: (state) => {
            state.count += 1;
        },
        //action2
        decrement: (state) => {
            state.count -= 1;
        }
    }
});