import { useState } from "react";
import Styles from "./Square.module.css";

export function Square() {
    const [counter, setCounter] = useState(0);
    return (
        <div>

            <h1 className={Styles.head}>head</h1>
            <div  className={Styles.Square}>Counter: {counter}</div>
            <div>try</div>
            <button onClick={() => setCounter(counter + 1)}>click</button>

            
        </div>
        
    );
}