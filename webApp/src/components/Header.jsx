import React from "react";  
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
    return (
        <>
        <header className="bg-red-800 p-3 fixed w-full z-10 border-spacing- border-dashed border-b-1 border-yellow just-another-hand-regular text-yellow-500 flex items-center justify-between">
          <nav className="flex space-x-2 items-center">
          <Link to="/" class="navbarLink"><img src="/logo.png" alt="Logo"/></Link>
         <Link to="/"><h1 class="title">Moulin d'Escapat</h1></Link>
        </nav>
        <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
          <ul className="flex space-x-2 absolute top-1.5 bottom-1.5 right-15">
            <li class="navbarLink">
              <Link to="/association">
              <img title="home" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
              </Link>
            </li>
            <li class='navbarLink'>
              <Link to="/about">
              <img title="aboutUs" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
              </Link>
            </li>
            <li class='navbarLink'>
              <Link to="/accomodations">
              <img title="accomodations" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
              </Link>
            </li>
            <li class='navbarLink'>
              <Link to="/contact">
              <img title="contact" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
              </Link>
            </li>
            <li class='navbarLink'>
              <Link to="/volunteers">
              <img title="volunteers" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
              </Link>
            </li>
            <li class='navbarLink'>  
              <Link to="/cpm">
              <img title="copainsDuMoulin" src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
              </Link>
            </li>
          </ul>
        </nav>
            <nav className="sm:hidden items-end gap-1 font-semibold">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="sm:hidden font-bold text-xl hover:text-gray-500"
              >
                {showMenu ? <GrClose /> : <GiHamburgerMenu />}
              </button>
              {showMenu && (
          <>
            <ul className="">
            <li class="">
              <Link to="/association">
              asso
              </Link>
            </li>
            <li class=''>
              <Link to="/about">
              vision
              </Link>
            </li>
            <li class=''>
              <Link to="/accomodations">
              accomodations 
              </Link>
            </li>
            <li class=''>
              <Link to="/contact">
              contact
              </Link>
            </li>
            <li class=''>
              <Link to="/volunteers">
              volunteers
              </Link>
            </li>
            <li class=''>  
              <Link to="/cpm">
              copains du moulin
              </Link>
            </li>
          </ul>
          </>
        )}
        </nav>
        </header>
        </>
    )
 
}

export default Header;