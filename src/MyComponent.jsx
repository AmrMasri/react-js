import { useState, useEffect} from "react";

function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    useEffect(() => {
        document.title = `count : ${count} ${color}`
    }, [count, color]);



    function addCount(){
        setCount (c => c + 1)
    }

    function subtractCount(){
        setCount (c => c - 1)
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }

    return(
        <>
        <p style={{color: color}}>count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br />
        <button onClick={changeColor}>change color</button>

        </>
    );
}
export default MyComponent ;