import React from "react";  
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import visionLogo from '../assets/img/visionLogo.png';
import assoLogo from '../assets/img/assoLogo.png';
import cdmLogo from '../assets/img/cdmLogo.png';
import volunteersLogo from '../assets/img/volunteersLogo.png'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
    return (
        <>
        <header class="bg-red-800 p-0.5 fixed w-full z-10 border-spacing- border-dashed border-b-1 border-yellow just-another-hand-regular text-yellow-500 flex items-center justify-between">
          <nav class="flex space-x-2 items-center">
          <Link to="/" class="navbarLogo"><img src="/logo.png" alt="Logo"/></Link>
         <Link to="/"><h1 class="navbarTitle">Moulin d'Escapat</h1></Link>
        </nav>
        <nav class="hidden md:flex">
          <ul class="flex flex-row space-x-5 items-center justify-between">
            <li class='navbarLink'>
              <Link to="/about">
              <img title="vision" src={visionLogo} alt="visionLogo" class="navbarLogo w-10 h-10 rounded-full flex justify-between items-center" />
              <span class="navbarLinkName">Vision</span>
              </Link>
            </li>
            <li class="navbarLink">
              <Link to="/association">
              <img title="Asso" src={assoLogo} alt="Logo" class="navbarLogo w-10 h-10 rounded-full" />
              <span class="navbarLinkName">Asso</span>
              </Link>
            </li>
            <li class='navbarLink'>
              <Link to="/accomodations">
              <img title="accomodations" src="accomodationsLogo" alt="accoLogo" class="navbarLogo w-10 h-10" />
              <span>Accomodations</span>
              </Link>
            </li>
            <li class='navbarLink'>
              <Link to="/contact">
              <img title="contact" src="/logo.png" alt="contactLogo" class="navbarLogo w-10 h-10 rounded-full" />
              <span>Contact Us</span>
              </Link>
            </li>
            <li class='navbarLink'>
              <Link to="/volunteers">
              <img title="volunteers" src={volunteersLogo} alt="volunteersLogo" class="navbarLogo w-10 h-10 rounded-full" />
              <span>Volunteers</span>
              </Link>
            </li>
            <li class='navbarLink'>  
              <Link to="/cpm">
              <img title="copainsDuMoulin" src={cdmLogo} alt="cdmLogo" class="navbarLogo w-10 h-10 rounded-full" />
              <span>Copains du Moulin</span>
              </Link>
            </li>
          </ul>
        </nav>
            <nav class="md:hidden items-end gap-1 font-semibold">
              <button
                onClick={() => setShowMenu(!showMenu)}
                class="md:hidden font-bold text-xl hover:text-gray-500"
              >
                {showMenu ? <GrClose /> : <GiHamburgerMenu />}
              </button>
              {showMenu && (
          <>
          <div class="absolute top-12 right-3 bg-red-800 border-spacing- border-dashed border-1 border-yellow just-another-hand-regular text-yellow-500 p-3 rounded-lg">
            <ul class="">
            <li class="hiddenNavbarLink">
              <Link to="/association" onClick={() => setShowMenu(false)}>
              Asso
              </Link>
            </li>
            <li class='hiddenNavbarLink'>
              <Link to="/about" onClick={() => setShowMenu(false)}>
              Vision
              </Link>
            </li>
            <li class='hiddenNavbarLink'>
              <Link to="/accomodations" onClick={() => setShowMenu(false)}>
              Accomodations 
              </Link>
            </li>
            <li class='hiddenNavbarLink'>
              <Link to="/contact" onClick={() => setShowMenu(false)}>
              Contact
              </Link>
            </li>
            <li class='hiddenNavbarLink'>
              <Link to="/volunteers" onClick={() => setShowMenu(false)}>
              Volunteers
              </Link>
            </li>
            <li class='hiddenNavbarLink'>  
              <Link to="/cpm" onClick={() => setShowMenu(false)}>
              Copains du Moulin
              </Link>
            </li>
          </ul>
          </div>
          </>
        )}
        </nav>
        </header>
        </>
    )
 
}

export default Header;