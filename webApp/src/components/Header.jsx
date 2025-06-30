import React from "react";  
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <nav>
          <ul>
            <li>
              <Link to="/">h</Link>
            </li>
            <li>
              <Link to="/about">a</Link>
            </li>
            <li>
              <Link to="/accomodations">A</Link>
            </li>
            <li>
              <Link to="/contact">c</Link>
            </li>
            <li>
              <Link to="/volunteers">v</Link>
            </li>
            <li>  
              <Link to="/cpm">cdm </Link>
            </li>
          </ul>
        </nav>
        </>
    )
 
}

export default Header;