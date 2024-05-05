import React , {useState} from 'react'

function MyComponent(){
    const [name, setName] = useState("guest")
    const [quantity, setQuantity] = useState()

    function handleClickChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    return(<div>
        <input value={name} onChange={handleClickChange} />
        <p>Name : {name}</p>

        <i><input value={quantity} onChange={handleQuantityChange} type="number" /></i>
        <p>Quantity : {quantity}</p>
    </div>);
}
export default MyComponent ;