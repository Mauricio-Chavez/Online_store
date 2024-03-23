import React from 'react'
import './About.css'
import { useState } from 'react'
function About() {

    const [contactVisible, setContactVisible] = useState(false)

    function showData() {
        setContactVisible(!contactVisible)
    }
    return (
        <div className='about page'>
            <h3>Mauricio Chavez</h3>
            {contactVisible && (
                <div className='box'>
                    <p>To get in touch please write to <b>mau_chavez003@hotmail.com</b></p>
                </div>
            )}
            <button className='btn btn-outline-dark' onClick={showData}>View Contact Info</button>
        </div>
    )
}

export default About

/* 
    Professor solution:
    function showData(){
        setContactVisible(true);
    }
    {contactVisible ? (
                <div className='box'>
                    <p>To get in touch please write to <b>mau_chavez003@hotmail.com</b></p>
                </div>
            ) : null}
*/