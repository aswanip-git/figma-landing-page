import React from 'react'; 
import AppLogo from "./images/navbar-logo.png";


function Navbar() {
    return (
        <nav className="App-header">
            <div>
                <img className="App-logo" src={AppLogo} alt="logo"/>
            </div>
            <div className='App-menu'>
                <a href="#" className="App-links">Home</a>
                <a href="#" className='App-links'>Product</a>
                <a href="#" className='App-links'>Contact</a>
                <a href="#" className='App-links'>About</a>
            </div>
            <div className="App-login">
                <a href="#" className="login App-links">Login</a>
            </div>
            
        </nav>
    )
}
export default Navbar