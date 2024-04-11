import "./Catalog.css"
import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import DataService from "../services/dataService";


function Catalog() {
    const [data, setData] = useState([]);
    async function loadCatalog(){
        let service = new DataService();
        let cat = await service.getCatalog()
        setData(cat);
    }
    useEffect(() => {
        loadCatalog();
    }, [])

    return (
        <div className="catalog page">
            <div className="container">
            <h1>Our Amazing Catalog</h1>
            {
                data.map((prod) => (<Product key={prod._id} info={prod}/>))
            }
            </div>
        </div>
    )
}

export default Catalog