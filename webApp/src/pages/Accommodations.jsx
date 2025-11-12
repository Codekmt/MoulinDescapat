import React from 'react';
import ImgWrapper from '../components/ImgWrapper';
import grangeDance from '../assets/img/grangeDance.jpg';
import AccommodationsCard from '../components/AccomodationsCard';
import moulinAccommodation from '../assets/img/moulinAccomodation.jpg';
import vision from '../assets/img/vision.jpg'; 

const Accommodations = () => {
    return (
        <div>
            <ImgWrapper src={moulinAccommodation} alt="AccommodationsPhoto" title="Accommodations" />
            <div className='accomodationsIntroText p-20 pt-5 '>
                <p className='text-lg mt-2 '>Discover our charming accommodations nestled in the heart of the French countryside. Whether you're seeking a cozy bed and breakfast, a serene garden retreat, or a rustic caravan experience, Le Moulin d'Escapat offers a variety of options to suit your preferences. Each accommodation is designed to provide comfort and tranquility, allowing you to unwind and immerse yourself in the natural beauty of the surroundings. Explore our offerings below and find the perfect place to stay during your visit.</p>

            </div>
            <div className="accommodationsCardsContainer">
            <AccommodationsCard
                title="Chambres d'hôtes"
                description="A beautiful place to stay."
                imgSrc={vision}
            />
            <AccommodationsCard
                title="Jardin Du Moulin"
                description="Comfortable and cozy."
                imgSrc={vision}
            />
            <AccommodationsCard
                title="Caravans du Moulin"
                description="Experience the countryside."
                imgSrc={vision}
            />
            </div>

        </div>
    );
};

export default Accommodations;
