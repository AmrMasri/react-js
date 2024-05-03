import React , {useState} from 'react'

function MyComponent(){
    const [name , setName] =  useState("Geust") ; 
    const [age , setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState (false)


    const updateName = () => {
        setName  ("Amr");
    }

    const updateAge = () => {
        setAge (age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed (!isEmployed)
    }

    return(
        <div>
            <p>Name : {name} </p>
            <button onClick={updateName}>Set Name</button>

            <p>age : {age} </p>
            <button onClick={updateAge}>increment age</button>

            <p>isEmployed : {isEmployed ? "yes" : "no"} </p>
            <button onClick={toggleEmployedStatus}>toggle status</button>
        </div>
    );

}
export default MyComponent ;