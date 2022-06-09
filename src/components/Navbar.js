import React from 'react'; 
import AppLogo from "./images/navbar-logo.png";


function Navbar() {
    return (
        <nav className="app-header">
            <div>
                <img className="app-logo" src={AppLogo} alt="logo"/>
            </div>
            <div className='app-menu'>
                <a href="#" className="app-links">Home</a>
                <a href="#" className='app-links'>Product</a>
                <a href="#" className='app-links'>Contact</a>
                <a href="#" className='app-links'>About</a>
            </div>
            <div className="app-login">
                <a href="#" className="login app-links">Login</a>
            </div>
            
        </nav>
    )
}
export default Navbar