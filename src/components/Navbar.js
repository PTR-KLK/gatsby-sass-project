import React from "react";
import { Link } from "gatsby";

const Navbar = ({ navbarVisible }) => {
  return (
    <nav className={navbarVisible ? "visible" : "invisible"}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page-2/">Page 2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
