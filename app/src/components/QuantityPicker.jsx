import "./QuantityPicker.css";
import React, { useState } from 'react'

function QuantityPicker({ quantity, setQuantity}) {
    
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
            <button className="button" onClick={decrement}>-</button>
            <label >{quantity}</label>
            <button className="button" onClick={increment}>+</button>
        </div>
    )
}

export default QuantityPicker