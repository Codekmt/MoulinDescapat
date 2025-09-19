import React from 'react';
import ImgWrapper from '../components/ImgWrapper';
import grangeDance from '../assets/img/grangeDance.jpg';
import AccomodationsCard from '../components/AccomodationsCard';

const Accomodations = () => {
    return (
        <div>
            
            <ImgWrapper src={grangeDance} alt="AccomodationsPhoto" title="Accomodations" />
            <div className="accomodationsCardsContainer">
            <AccomodationsCard
                title="Chambres d'hôtes"
                description="A beautiful place to stay."
                imgSrc={grangeDance}
            />
            <AccomodationsCard
                title="Jardin Du Moulin"
                description="Comfortable and cozy."
                imgSrc={grangeDance}
            />
            <AccomodationsCard
                title="Caravans du Moulin"
                description="Experience the countryside."
                imgSrc={grangeDance}
            />
            </div>

        </div>
    );
};

export default Accomodations;
