import React from 'react'; 
import AppLogo from "./images/navbar-logo.png";


function Navbar() {
    return (
        <nav className="appHeader">
            <div>
                <img className="appLogo" src={AppLogo} alt="logo"/>
            </div>
            <div className='appMenu'>
                <a href="#" className="appLinks">Home</a>
                <a href="#" className='appLinks'>Product</a>
                <a href="#" className='appLinks'>Contact</a>
                <a href="#" className='appLinks'>About</a>
            </div>
            <div className="appLogin">
                <a href="#" className="login appLinks">Login</a>
            </div>
            
        </nav>
    )
}
export default Navbar