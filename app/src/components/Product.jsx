
import "./Product.css"
import QuantityPicker from './QuantityPicker'
import constants from '../common/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function Product(props) {
    function addToCart() {
        console.log("Adding to cart");
    }
    return (
        <div className='product'>
            <img src={`${constants.IMAGE_PATH + props.info.image}`} alt="product" />
            <h6>{props.info.title}</h6>
            <label>${props.info.price}</label>
            <QuantityPicker />
            <div className="sort-btn">
                <button type="button" className="btn btn-outline-success" onClick={addToCart}><FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    )

}

export default Product