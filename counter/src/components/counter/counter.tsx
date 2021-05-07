import React from "react"
import "./counter.css"
import CounterProps from "./counterProps";

const Counter: React.FC<CounterProps> = ({counterTitle}) => {
   
    const [count, setCount] = React.useState(5);
   
    const increment = () => {
        setCount(count+1)
    }
    return <div className="counter-wrapper">
    <div className="counter">
        <button className="counter-btn">
            {"<"}
        </button>
        <div className="counter-label">
            {`${counterTitle}: ${count}`}
        </div>
        <button className="counter-btn" onClick={increment}>
            {">"}
        </button>
    </div>
</div>
}

export default Counter;