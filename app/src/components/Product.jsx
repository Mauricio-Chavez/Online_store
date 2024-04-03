
import "./Product.css"
import QuantityPicker from './QuantityPicker'
import constants from '../common/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState,useContext } from "react";

import DataContext from "../context/dataContext";

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    let addProductToCart = useContext(DataContext).addProductToCart;
    
    function addToCart() {
        let prod = {...props.info}
        prod.quantity = quantity;
        addProductToCart(prod);
        console.log(prod)
    }
    function quantityChanged(quantity) {
        // const price = props.info.price * quantity;
        // console.log("Quantity changed to: " + quantity + " Total price: " + price);
        console.log("Quantity changed to: " + quantity);
        setQuantity(quantity);
    }   
    function getTotal() {
        return (quantity * props.info.price).toFixed(2);
    }
    return (
        <div className='product'>
            <img src={`${constants.IMAGE_PATH + props.info.image}`} alt="product" />
            <h6>{props.info.title}</h6>
            <label>${props.info.price}</label>
            <label className="total"><b>Total: </b>${getTotal()}</label>
            <QuantityPicker onChange = {quantityChanged} />
            <div className="sort-btn">
                <button type="button" className="btn btn-outline-success" onClick={addToCart}><FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    )

}

export default Product