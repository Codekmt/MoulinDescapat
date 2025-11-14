import React from "react";
import facebookIcon from '../assets/img/facebook.png';
import instagramIcon from '../assets/img/instagram.png'

const Footer = () => {
    return (
        <>
        <footer>
            <div className="bg-red-800 p-3 just-another-hand-regular text-center text-yellow-500 border-dashed border-t border-yellow">
                <h1 className="text-5xl text-left m-2">Follow us</h1>
                <div className="flex space-x-2 mb-2 m-1">
                    <img src={facebookIcon} alt="facebook" className="w-10 h-10 rounded-full"/>
                    <img src={instagramIcon} alt="instagram" className="w-10 h-10 rounded-full"/>
                </div >
                <div className="text-lg space-x-4 -mt-15">
                <a href="/contact">Contact us</a>
                <p>&copy; 2025 Moulin d'Escapat. All rights reserved.</p>
                </div>
            </div>
        </footer>
        </>
    )
 
}

export default Footer;
