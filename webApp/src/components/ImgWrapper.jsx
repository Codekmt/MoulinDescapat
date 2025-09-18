import React from "react";
import grangeDance from '../assets/img/grangeDance.jpg';

const ImgWrapper = (props) => {
    return (
        <div>       
            <img src={props.src} alt={props.alt} className="imgCover"/>
            <h1 className="imgCoverTitle">{props.title}</h1>       
        </div>
    );
}

export default ImgWrapper;