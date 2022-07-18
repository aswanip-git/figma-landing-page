import React from "react";
import AppLogo from "../images/navbar-logo.svg";

const appLinks = ["Home", "Product", "Contact", "About"];

function Navbar() {
  return (
    <nav className="appHeader">
      <div>
        <img className="appLogo" src={AppLogo} alt="logo" />
      </div>
      <div className="appMenu">
        {appLinks.map((Link, id) => (
          <a href=" " className="appLinks" key={id}>
            {Link}
          </a>
        ))}
      </div>
      <div className="appLogin">
        <a href=" " className="login appLinks">
          Login
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
