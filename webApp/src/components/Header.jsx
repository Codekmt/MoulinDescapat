import React from "react";  
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <header className="bg-red-800 p-3 fixed w-full z-10">
          <div className="flex space-x-2 items-center">
          <Link class="listItem"><img src="/logo.png" alt="Logo"/></Link>
        <h1 class="title">Moulin d'Escapat</h1>
        </div>
        <nav >
          <ul className="flex space-x-2 absolute top-1.5 bottom-1.5 right-15">
            <li class="listItem">
              <img title="home" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
              <Link to="/"></Link>
            </li>
            <li class='listItem'>
              <img title="aboutUs" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
              <Link to="/about"></Link>
            </li>
            <li class='listItem'>
              <img title="accomodations" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
              <Link to="/accomodations"></Link>
            </li>
            <li class='listItem'>
              <Link to="/contact">
              <img title="contact" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" /></Link>
            </li>
            <li class='listItem'>
              <Link to="/volunteers">
              <img title="volunteers" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" /></Link>
            </li>
            <li class='listItem'>  
              <Link to="/cpm">
              <img title="copainsDuMoulin" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" /></Link>
            </li>
          </ul>
        </nav>
        </header>
        </>
    )
 
}

export default Header;