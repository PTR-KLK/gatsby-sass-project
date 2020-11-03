import React from "react";

const Header = ({showNavbar}) => {
  return (
    <header>
        <button onClick={showNavbar}>Menu</button>
        <p>My Gatsby Site</p>
    </header>
  );
};

export default Header;

