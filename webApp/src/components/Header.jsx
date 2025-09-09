import React from "react";  
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <header className="bg-red-800 p-3 fixed w-full z-10 border-spacing- border-dashed border-b-1 border-yellow just-another-hand-regular text-yellow-500 flex items-center justify-between">
          <div className="flex space-x-2 items-center">
          <Link to="/" class="listItem"><img src="/logo.png" alt="Logo"/></Link>
         <Link to="/"><h1 class="title">Moulin d'Escapat</h1></Link>
        </div>
        <nav >
          <ul className="flex space-x-2 absolute top-1.5 bottom-1.5 right-15">
            <li class="listItem">
              <Link to="/association">
              <img title="home" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
              </Link>
            </li>
            <li class='listItem'>
              <Link to="/about">
              <img title="aboutUs" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
              </Link>
            </li>
            <li class='listItem'>
              <Link to="/accomodations">
              <img title="accomodations" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
              </Link>
            </li>
            <li class='listItem'>
              <Link to="/contact">
              <img title="contact" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
              </Link>
            </li>
            <li class='listItem'>
              <Link to="/volunteers">
              <img title="volunteers" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
              </Link>
            </li>
            <li class='listItem'>  
              <Link to="/cpm">
              <img title="copainsDuMoulin" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
              </Link>
            </li>
          </ul>
        </nav>
        </header>
        </>
    )
 
}

export default Header;