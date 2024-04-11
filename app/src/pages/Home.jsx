import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Product from '../components/Product'
import constants from '../common/config'
import DataService from '../services/dataService'

function Home() {
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
        <div className='home page'>
            <h3>Organik Store</h3>
            <div className='flex-container'>
                <div className='carts-container'>
                    {data.slice(0, 4).map((prod) => (<Product key={prod._id} info={prod} />))}
                </div>
                <Link to='/catalog' className='btn btn-outline-success'>See More{'>'}</Link>
            </div>
            <div className='super-container'>
                <img src={constants.IMAGE_PATH + "supermercado.jpg"} alt="Supermarket Image" />
                <div className='text-container'>
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio molestiae aliquam, commodi illum atque? Beatae reprehenderit est fugit quidem perspiciatis sunt unde? Dolores quae quidem vero a, repellat illum.</p>
                </div>
            </div>
        </div>
    )
}

export default Home