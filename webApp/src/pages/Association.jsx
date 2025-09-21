import React from "react";
import ImgWrapper from '../components/ImgWrapper';
import partyTentGarden from '../assets/img/partyTentGarden.jpg';

const Association = () => {
    return (
        <div>
            <ImgWrapper src={partyTentGarden} alt="AssociationPhoto" title="Association" />
        </div>
    );
};

export default Association;