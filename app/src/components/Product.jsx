import {useState} from 'react'
import "./Product.css"
import QuantityPicker from './QuantityPicker'

function Product(props) {
    const [quantity, setQuantity] = useState(0);
    return (
        <div className='product'>
            <img src={`/images/${props.info.image}`} alt="product"/>
            <h6>{props.info.title}</h6>
            <label>${props.info.price}</label>
            <QuantityPicker quantity={quantity} setQuantity={setQuantity}/>
        </div>
    )
    
}

export default Product