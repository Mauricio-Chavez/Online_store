import React, { useState } from 'react'
import './ShoppingList.css'

function ShoppingList() {
    const [list, setList] = useState(["test 1", "test 2", "test 3"]);
    function addItem(){
        const input = document.getElementById('newItem');
        setList([...list, input.value]);
        input.value = '';
    }
    return (
        <div className='shopping-list page'>
            <h3 className='title'>Shopping List</h3>
            <div className='flex-container'>
                <div className='box'> 
                    <input type="text" id='newItem' placeholder='AddItem' className='inp'/>
                    <button className='btn btn-dark' onClick={addItem}>Add</button>
                </div>
                <ul>
                    <h3>List the Items</h3>
                    {list.map((item) => (
                        <li >{item}</li>
                    ))} 
                </ul>
            </div>
        </div>
    )
}

export default ShoppingList