import React from 'react';
import logo  from  '../../images/logo.png'
import './Header.css'

const Heder = () => {
    return (

        <div>

     
            <div className='img-style'>
                <img src={logo} alt="" />
            </div>
            <nav className='nav-bar'>
                <a href="/home">Home</a>
                <a href="/About">About</a>
                <a href="/Service">Service</a>
            </nav>
        </div>
    );
};

export default Heder;