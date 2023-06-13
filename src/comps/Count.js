import {useState} from "react";
import "./Count.css";

export default function ButtonCount(){
    const [count, setCount] = useState(0);
    function aumenta(){
        setCount(count + 1)
    }
    return (
        <button onClick={aumenta}>{count}</button>
    )
}