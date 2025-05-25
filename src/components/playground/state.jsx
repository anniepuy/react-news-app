/* 
Project: React news app
Author: Ann Hagan
Date: 2025-05-24
Title: state.jsx
Purpose: Place for React to know of a place where we store data that can be mutated. Uses State Hook.
useState is a hook that allows you to add state to a functional component. It returns an array with two elements: the current state and a function to update it.
*/
import { useState } from "react";

const StatePlayground = () => {
    const initialCount = 0;

    let [count, setCount] = useState(initialCount); 

    //const addOne = () => {
        //setCount(count + 1);
    //}
    const subTractOne = () => {
        setCount(prevCount => {
            return prevCount - 1;
        })
    }

    const resetCount = () => {
        setCount(initialCount);
    }

    // This is a playground for state management in React
    return (
        <>
            <h3>Count:{count} </h3>
            <button onClick={() => setCount(count+1)}>Add one itme</button>
            <button onClick={{subTractOne}}>Remove one</button>
            <button onClick={{resetCount}}>Reset</button>

        </>
    )
}

export default StatePlayground;