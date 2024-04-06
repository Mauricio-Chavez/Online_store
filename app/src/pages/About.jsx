import React from 'react'
import './About.css'
import { useState } from 'react'
import constants from '../common/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
function About() {

    const [contactVisible, setContactVisible] = useState(false)

    function showData() {
        setContactVisible(!contactVisible)
    }
    return (
        <div className='about page'>
            <div className='founder-container'>
                <img src={constants.IMAGE_PATH + "960x0.webp"} alt="" />
            </div>
            <div className='info-founder-container'>
                <div className='title-style'>
                    <h1>Anthony Edward Stark</h1>
                    <p>Founding Principal</p>
                </div>
                <div className='text-founder'>
                    <ul className="contact flex-contact">
                        <li>
                            <p>Phone</p>
                            <a>555-555-5555</a>
                        </li>
                        <li>
                            <p>License Number</p>
                            <a>#1111111</a>
                        </li>
                    </ul>
                    <ul className="contact">
                        <li>
                            <p>Email</p>
                            <a>elairomen@starkindustries.com</a>
                        </li>
                        <br />
                        <li>
                            <p>Adresss</p>
                            <a>10880 Malibu Point, 90265</a>
                            <br />
                            <a>Malibú, California, United States</a>
                        </li>
                    </ul>
                    <ul className="contact flex-contact-social">
                        <li>
                            <FontAwesomeIcon icon={faFacebook} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTwitter} />
                        </li>
                    </ul>
                    {contactVisible && (
                        <div className='box'>
                            <p>To get in touch please write to <b>mau_chavez003@hotmail.com</b></p>
                        </div>
                    )}
                    <div className='btn-container'>
                        <button className='btn btn-outline-dark' onClick={showData}>View Contact Info</button>
                    </div>
                </div>
            </div>

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