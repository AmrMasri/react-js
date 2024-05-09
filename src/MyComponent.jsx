import { useState } from "react";

function MyComponent(){


    const [cars, setCars] = useState ([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    function handleAddCar(){

    }

    function handleRemoveCar(index){

    }

    function handleYearChange(event){

    }

    function handleMakeChange(event){

    }

    function handleModelChange(event){

    }

    return(<></>);

}
export default MyComponent ;