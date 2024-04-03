import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import DataContext from '../context/dataContext'
import { useContext } from 'react'
function Navbar() {
    
    const cart = useContext(DataContext).cart;
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme='dark'>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                        Stark Store
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/catalog">
                                    Catalog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shoppinglist">
                                    Your Shopping List
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">
                                    Admin
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            
                            <button className="btn btn-outline-light" type="button">
                                <FontAwesomeIcon icon={faShoppingCart} /> {cart.length}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar