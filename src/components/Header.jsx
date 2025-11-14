import React from "react";  
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import visionLogo from '../assets/img/visionLogo.png';
import assoLogo from '../assets/img/assoLogo.png';
import cdmLogo from '../assets/img/cdmLogo.png';
import volunteersLogo from '../assets/img/volunteersLogo.png';
import accommodationsLogo from '../assets/img/accommodationsLogo.png';
import contactUsLogo from '../assets/img/contactUsLogo.png'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
    return (
        <>
        <header className="bg-red-800 pt-4 w-full border-spacing- border-dashed border-b border-yellow just-another-hand-regular text-yellow-500 flex items-center justify-between fixed z-13">
          <nav class="flex space-x-2 ml-5 mb-3">
          <Link to="/" class="navbarLogo mr-5"><img src="/logo.png" alt="Logo"/></Link>
         <Link to="/"><h1 class="navbarTitle">Moulin d'Escapat</h1></Link>
        </nav>
        <nav class="hidden min-[940px]:flex">
  <ul class="flex flex-row items-center justify-center">
    <li class="navbarLink flex flex-col items-center text-center px-4">
      <Link to="/about" class="flex flex-col items-center">
        <img src={visionLogo} alt="visionLogo" class="navbarLogo w-10 h-10 rounded-full mb-1" />
        <span>Vision</span>
      </Link>
    </li>

    <div class="navbarDivider"></div>

    <li class="navbarLink flex flex-col items-center text-center px-4">
      <Link to="/association" class="flex flex-col items-center">
        <img src={assoLogo} alt="assoLogo" class="navbarLogo w-10 h-10 rounded-full mb-1" />
        <span>Association</span>
      </Link>
    </li>

    <div class="navbarDivider"></div>

    <li class="navbarLink flex flex-col items-center text-center px-4">
      <Link to="/accomodations" class="flex flex-col items-center">
        <img src={accommodationsLogo} alt="accoLogo" class="navbarLogo w-10 h-10 mb-1" />
        <span>Accomodations</span>
      </Link>
    </li>

    <div class="navbarDivider"></div>

    <li class="navbarLink flex flex-col items-center text-center px-4">
      <Link to="/volunteers" class="flex flex-col items-center">
        <img src={volunteersLogo} alt="volunteersLogo" class="navbarLogo w-10 h-10 rounded-full mb-1" />
        <span>Volunteers</span>
      </Link>
    </li>

    <div class="navbarDivider"></div>

    <li class="navbarLink flex flex-col items-center text-center px-4">
      <Link to="/cpm" class="flex flex-col items-center">
        <img src={cdmLogo} alt="cdmLogo" class="navbarLogo w-10 h-10 rounded-full mb-1" />
        <span>Copains du Moulin</span>
      </Link>
      </li>
      <div class="navbarDivider"></div>
      <li class="navbarLink flex flex-col items-center text-center px-4">
      <Link to="/contact" class="flex flex-col items-center">
        <img src={contactUsLogo} alt="contactLogo" class="navbarLogo w-10 h-10 rounded-full mb-1" />
        <span>Contact</span>
      </Link>
    
    </li>
  </ul>
</nav>

            <nav class="flex max-[939px]:flex min-[940px]:hidden items-end gap-1 font-semibold m-3">
              <button
                onClick={() => setShowMenu(!showMenu)}
                class="flex max-[939px]:flex min-[940px]:hidden font-bold text-xl hover:text-yellow-200"
              >
                {showMenu ? <GrClose /> : <GiHamburgerMenu />}
              </button>
              {showMenu && (
          <>
          <div class="absolute top-12 right-3 bg-red-800 border-spacing- border-dashed border-yellow just-another-hand-regular text-yellow-500 p-3 rounded-lg">
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
              Accommodations 
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