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
        },
        //action3
        reset: (state) => {
            state.count = 0;
        },
        //action4
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});

export const { increment, decrement,reset,incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.count;  //here the counter refers to the name of the slice in store.js

export default counterSlice.reducer;