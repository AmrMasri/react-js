import React , {useState} from 'react'

function MyComponent(){
    const [name, setName] = useState("guest")
    const [quantity, setQuantity] = useState()
    const [comment, setComment] = useState("")
     const [payment, setPayment] = useState("")
     const [shipping, setShipping] = useState("Delivery")

    function handleClickChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    return(<div>
        <input value={name} onChange={handleClickChange} />
        <p>Name : {name}</p>

        <i><input value={quantity} onChange={handleQuantityChange} type="number" /></i>
        <p>Quantity : {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter Comment'></textarea>
        <p> Comment : {comment}</p>


        <select value={payment} onChange={handlePaymentChange}>
            <option value="">select an option</option>
             <option value="visa">visa</option>
             <option value="master card">master card</option>
             <option value="gift card">gift card</option>
        </select>
        <p>Payment : {payment}</p>

        <label>
            <input type="radio" value= "Pick Up" checked= {shipping === "Pick Up"} onChange={handleShippingChange}/>
            Pickup
        </label>
        <label>
        <input type="radio" value= "Delivery" checked= {shipping === "Delivery"} onChange={handleShippingChange}/>
            Delivery
        </label>
        <p>shipping : {shipping}</p>


    </div>);
}
export default MyComponent ;