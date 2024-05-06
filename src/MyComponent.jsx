import { useState } from "react";

function MyComponent(){

    const [foods, setFoods] = useState(["banana", "apple", "orange"]);

    function handleAddFood (){
        const newFood = document.getElementById("foodsInput").value
        document.getElementById("foodsInput").value = ""
        setFoods (f => [...f ,newFood])
    }

    function handleRemoveFood (index){
        setFoods(foods.filter(( _ , i) => i !== index))
    }

    return(<div>
             <h2>List Of Food</h2>
             <ul>
                {foods.map((food , index) => <li key={index} onClick={() => handleRemoveFood (index)}>{food}</li>)}
             </ul>

             <input type="text" id="foodsInput" placeholder="Enter Food Name"/>

             <button on onClick={handleAddFood}>Add Food</button>
        </div>);

}
export default MyComponent ;