import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home page'>
            <h3>Welcome to Stark Store</h3>
            <Link to='/catalog' className='btn btn-outline-success'>View Catalog{'>'}</Link>
        </div>
    )
}

export default Home