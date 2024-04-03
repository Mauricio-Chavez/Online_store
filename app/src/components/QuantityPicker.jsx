import "./QuantityPicker.css";
import React, { useState } from 'react'

function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        let newVal = quantity + 1;
        setQuantity(newVal);
        props.onChange(newVal);
    }
    const decrement = () => {
        if (quantity > 0) {
            let newVal = quantity - 1;
            setQuantity(newVal);
            props.onChange(newVal);
        }
    }
    
    return (
        <div className="qt-picker">
            <button  className="button" disabled={quantity === 0} onClick={decrement}>-</button>
            <label >{quantity}</label>
            <button className="button" onClick={increment}>+</button>
        </div>
    )
}

export default QuantityPicker