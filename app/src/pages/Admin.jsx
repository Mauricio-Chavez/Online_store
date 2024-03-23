import React from 'react'
import './Admin.css'
function Admin() {
    return (
        <div className='admin page'>
            <h1>Store Administration</h1>
            <div className='parent'>
                <div className='prods'>
                    <h3>Products</h3>
                </div>
                <div className='cupons'>
                    <h3>Cupons</h3>
                </div>
            </div>
        </div>
    )
}

export default Admin