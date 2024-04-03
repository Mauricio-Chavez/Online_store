import "./Catalog.css"
import React from 'react'
import Product from '../components/Product'
export const data = [
    {
        title: "Tomatoes",
        price: 25.65,
        category: "Fruit",
        image:"tomatoes.png",
        _id: "1",
    },
    {
        title: "Oranges",
        price: 19.0,
        category: "Fruit",
        image:"orange.png",
        _id: "2",
    },
    {
        title: "Eggs",
        price: 1.50,
        category: "Dairy",
        image:"eggs.png",
        _id: "3",
    },
    {
        title: "Strawberry",
        price: 28.675,
        category: "Fruit",
        image:"strawberry.png",
        _id: "4",
    },
    {
        title: "Milk",
        price: 3.50,
        category: "Dairy",
        image:"milk.png",
        _id: "5",
    },
    {
        title: "Carrots",
        price: 15.65,
        category: "Vegetable",
        image:"carrots.png",
        _id: "6",
    },
    {
        title: "Cabbage",
        price: 10.65,
        category: "Vegetable",
        image:"cabbage.png",
        _id: "7",
    },
];
function Catalog() {

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