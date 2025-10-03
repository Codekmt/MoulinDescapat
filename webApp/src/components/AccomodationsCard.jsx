import React from "react";

const AccomodationsCard = ({ title, description, imgSrc }) => {
    return (
        <div className="border p-4 shadow-lg w-80 mx-auto mt-5 rounded-lg">
            <img src={imgSrc} alt={title} className="mb-3 rounded-md"/>
            <div className="accomodationsCardText">
            <h5 className="text-2xl font-bold border-b-1">{title}</h5>
            <p>{description}</p>
            <button className="mt-2 bg-black text-white py-1 px-4 rounded hover:bg-gray-800 transition-colors duration-300">More info</button>
            </div>
        </div>
    );
};

export default AccomodationsCard;
