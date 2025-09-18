import React from "react";

const AccomodationsCard = ({ title, description, imgSrc }) => {
    return (
        <div className="accomodationsCard">
            <img src={imgSrc} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default AccomodationsCard;
