import { useState, useEffect} from "react";

function MyComponent(){

    const [width, setWidth] = useState(window.innerWidth)
    const [Height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listner Added")

        return() => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listner Removed")
        }
    }, [])

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }


    return(
        <>
        <p>Window Width : {width}px</p>
        <p>Window Height : {Height}px</p>
        </>
    );
}
export default MyComponent ;