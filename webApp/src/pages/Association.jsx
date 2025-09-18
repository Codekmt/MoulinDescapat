import React from "react";
import ImgWrapper from '../components/ImgWrapper';
import grangeDance from '../assets/img/grangeDance.jpg';

const Association = () => {
    return (
        <div>
            <ImgWrapper src={grangeDance} alt="AssociationPhoto" title="Association" />
        </div>
    );
};

export default Association;