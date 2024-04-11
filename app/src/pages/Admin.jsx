import React, { useState } from 'react'
import './Admin.css'
import DataService from '../services/dataService';
function Admin() {
    const [coupon, setCoupon] = useState({
        code:'',
        discount:'',
    });
    const [product, setProduct] = useState({
        title:'',
        price:'',
        category:'',
        image:'',
    });
    const [allProducts, setAllProducts] = useState([]);
    function handleProductChange(e) {
        const val = e.target.value
        const name = e.target.name
        
        var copy = {...product}
        copy[name] = val;
        setProduct(copy);
    }
    function saveProduct(e) {
        e.preventDefault();
        console.log(product);
        product.price = parseFloat(product.price);
        setAllProducts([...allProducts, product]);

        let service = new DataService();
        service.saveProduct(product);
        
    }
    const [allCoupons, setAllCoupons] = useState([]);

    function handleCouponChange(e) {
        const val = e.target.value
        const name = e.target.name
        
        var copy = {...coupon}
        copy[name] = val;
        setCoupon(copy);
    }
    function saveCoupon(e) {
        e.preventDefault();
        setAllCoupons([...allCoupons, coupon]);
    }
    return (
        <div className='admin page'>
            <h1>Store Administration</h1>
            <div className='parent container'>
                <div className='prods'>
                    
                    <form className='form'>
                        <h3>Products</h3>
                        <div className='mb-3'>
                            <label className='form-label'>Product Name</label>
                            <input type="text" className='form-control' name="title" onChange={handleProductChange}/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Product Price</label>
                            <input type="number" className='form-control' name='price'onChange={handleProductChange}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Category</label>
                            <input type="text" className="form-control" name='category' onChange={handleProductChange}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image</label>
                            <input type="text" className="form-control" name='image' onChange={handleProductChange}/>
                        </div>
                        
                        <button type='submit' className='btn btn-outline-success' onClick={saveProduct}>Add Product</button>
                    </form>
                    <ul>
                    <h3 className='margin-corr'>List the Products</h3>
                        {allProducts.map( p => <li ><b>Name: </b>{p.title} - <b>Price:</b> ${p.price} - <b>Category:</b> {p.category} - <b>Image:</b> {p.image}</li>)}
                    </ul>
                </div>
                <div className='cupons'>
                    
                    <form action="" className='form'>
                        <h3 >Coupons</h3>
                        <div className='mb-3'>
                            <label className='form-label'>Coupon Code</label>
                            <input type="text" className='form-control' onChange={handleCouponChange} name='code'/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Discount</label>
                            <input type="number" className='form-control' onChange={handleCouponChange} name='discount'/>
                        </div>
                        <button type='submit' className='btn btn-outline-success' onClick={saveCoupon}>Save Coupon</button>
                    </form>
                    <ul>
                        <h3 className='margin-corr'>List the Coupons</h3>
                        {allCoupons.map( c => <li ><b>Code: </b>{c.code} - <b>Discount:</b> {c.discount}% </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Admin