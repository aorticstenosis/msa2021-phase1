import React from "react"
import "./counter.css"
import CounterProps from "./counterProps";
import Button from "@material-ui/core/Button";

const Counter: React.FC<CounterProps> = ({counterValue}) => {
    const password: string = "000"
    
    const [count, setCount] = React.useState(5);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    
    const [imageUrl, setImageUrl] = React.useState<string | null>(null);
    React.useEffect(() => {
        if (count >= 10) {
            setImageUrl("/super-secret-image.jpg")
        } else if (count <= 0) {
            setImageUrl("/DO-NOT-OPEN.png")
        } else {
            setImageUrl(null)
        }
    }, [count]);

    return <div className="counter-wrapper">
        <div className="counter">
            <Button variant="outlined" onClick={decrement}>
            {"<"}
        </Button>
        <div className="counter-label">
            {`${count}`}
        </div>
        <Button variant="outlined" onClick={increment}>
            {">"}
            </Button>
        </div>
</div>
}

export default Counter;