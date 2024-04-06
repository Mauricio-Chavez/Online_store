import React from 'react'
import './Cart.css'

import DataContext from '../context/dataContext'
import { useContext } from 'react'
import CartProduct from './CartProduct';
function Cart() {
    const cart = useContext(DataContext).cart;

    function getNumProducts() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].quantity;
        }
        return total;
    }
    function getTotal() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].quantity * cart[i].price;

        }
        return total.toFixed(2);
    }

    return (
        <div className='cart page'>
            <h3 className='title'>Cart</h3>


            <div className='parent'>
                <div className="list">
                    <div className='numProducts'>
                        <h4>Number of Products: <span >{getNumProducts()}</span> </h4>
                    </div>
                    {cart.map((product) => {
                        return (
                            // <div className='prod-cart'>
                            //     <h4>{product.title}</h4>
                            //     <h4>Quantity: {product.quantity}</h4>
                            //     <h4>Price: ${product.price}</h4>
                            // </div>
                            <CartProduct key={product._id} data={product} />
                        )
                    })}
                </div>
                {/* <div className='total'>
                    <h4>Total</h4>
                    <label >${getTotal()}</label>
                </div> */}
            </div>
            <div className='totalM'>
                <h4>Total:</h4>
                <label >${getTotal()}</label>
            </div>
        </div>
    )
}

export default Cart