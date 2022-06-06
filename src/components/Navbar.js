import React from 'react';  

export default function Navbar() {
    return (
        <nav className="topbar">
            <div class="logoDiv">
                <img src="../images/navbar-logo.png" alt="logo"/>
            </div>
            <div className='menu'>
                <a href="#" className="menuItem">Home</a>
                <a href="#" className='menuItem'>Product</a>
                <a href="#" className='menuItem'>Contact</a>
                <a href="#" className='menuItem'>About</a>
            </div>
            <div className="loginButton">
                <a href="#" className="login menuItem">Login</a>
            </div>
            
        </nav>
    )
}