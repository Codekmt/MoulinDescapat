import React from "react";
import ImgWrapper from '../components/ImgWrapper';
import partyTentGarden from '../assets/img/partyTentGarden.jpg';
import vbProgramma from '../assets/img/vbProgramma.png';

const Association = () => {
    return (
        <div>
            <ImgWrapper src={partyTentGarden} alt="AssociationPhoto" title="Association" />
            <div class="container p-20">
                <h2 class="text-3xl m-auto border-b-2">Our program this summer</h2>
                <p>At Moulin d'Escapat, we believe in the power of community and collaboration. Our association is dedicated to bringing together artists, musicians, and performers from all walks of life to create a vibrant cultural hub. We strive to support local talent and provide a platform for creative expression.</p>
                <img src={vbProgramma} alt="Party Tent Garden" class="w-full h-auto object-cover rounded-2xl" />
                </div>
        </div>
    );
};

export default Association;