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

    let [count, setCount] = useState(0); 

    const addOne = () => {
        setCount(count + 1);
    }

    console.log(count);

    // This is a playground for state management in React
    return (
        <>
            <h3>Count:{count} </h3>
            <button onClick={{addOne}}>Add one itme</button>

        </>
    )
}

export default StatePlayground;