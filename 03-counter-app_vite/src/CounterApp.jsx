import { useState } from "react";
import PropTypes from "prop-types"; 

export const CounterApp = ({ value})=>{
  
    const [counter, setCounter] = useState( value ); 

    const increaseCounter = () => {
        setCounter(counter + 1)
    }
    const decreaseCounter = () =>{
        setCounter(counter - 1)
    }
    const resetCounter = ()=>{
        setCounter(value)
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter }</h2>

            <button onClick={ increaseCounter }>+1</button>
            <button onClick={ decreaseCounter }>-1</button>
            <button aria-label="btn-reset" onClick={ resetCounter  }>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired,
}
