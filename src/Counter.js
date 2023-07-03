import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    incrementByAmount,
    reset
}
from './counterSlice';
import { useState } from 'react';

import React from 'react'

import { selectCount } from './counterSlice';

const Counter = () => {
    const count = useSelector(selectCount); 
    const dispatch = useDispatch();
    //for dispatching actions
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue =Number(incrementAmount)||0;
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }
    return (
        <section>
            <p>{count}</p>
                <div>
                    <button onClick={() => dispatch(increment())}>+</button>
                    <button onClick={() => dispatch(decrement())}>-</button>
                <div>
                    <div>
                        <input type="number" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
                    </div>
                    <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Value</button>
                    <button onClick={resetAll}>Reset</button>
                </div>
            </div>
        </section>
    )
}

export default Counter