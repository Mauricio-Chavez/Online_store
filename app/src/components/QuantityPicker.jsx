import "./QuantityPicker.css";
import React, { useState } from 'react'

function QuantityPicker() {
    const [quantity, setQuantity] = useState(0);
    const increment = () => {
        setQuantity(quantity + 1);
    }
    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }
    return (
        <div className="qt-picker">
            <button  className="button" disabled={quantity == 0} onClick={decrement}>-</button>
            <label >{quantity}</label>
            <button className="button" onClick={increment}>+</button>
        </div>
    )
}

export default QuantityPicker