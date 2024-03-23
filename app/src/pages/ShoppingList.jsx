import React, { useState } from 'react'
import './ShoppingList.css'

function ShoppingList() {
    const [list, setList] = useState(["test 1", "test 2", "test 3"]);
    const [text, setText] = useState('');
    function addItem() {
        // setList([...list, input.value]);
        // input.value = '';\
        let copy = [...list];
        copy.push(text);
        setList(copy);
    }
    function handleTextChange(event) {
        const val = event.target.value;
        setText(val);
    }
    function deleteAll(){
        setList([]);
    }
    return (
        <div className='shopping-list page'>
            <h3 className='title'>Shopping List</h3>
            <div className='flex-container'>
                <div className='box'>
                    <input type="text" id='newItem' placeholder='AddItem' className='inp' onChange={handleTextChange} />
                    <button className='btn btn-success' onClick={addItem}>Add</button>
                    <button className='btn btn-danger' onClick={deleteAll}>Clear</button>
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