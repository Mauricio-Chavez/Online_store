import constants from '../common/config';
import './CartProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import DataContext from '../context/dataContext';
function CartProduct({data}) {
    let removeProductFromCart = useContext(DataContext).removeProductFromCart;

    function removeProduct(){
        removeProductFromCart(data);
    }

    return(
        <div className="cart-product">
            <div className="image"><img src={constants.IMAGE_PATH + data.image}/></div>
            <div className="titleC"><div className='titleProd'>{data.title}</div><div className='category'>{data.category}</div></div>
            <div className="quantity"><b><p>Quantity</p></b>{data.quantity}</div>
            <div className="price"><b><p>Total</p></b>${(data.quantity*data.price).toFixed(2)}</div>
            <button className="btn btn-sm btn-outline-danger" onClick={removeProduct}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
        </div>
    );
}

export default CartProduct;