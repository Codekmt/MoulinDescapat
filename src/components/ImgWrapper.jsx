import React from "react";
import grangeDance from "../assets/img/grangeDance.jpg";

const ImgWrapper = (props) => {
  return (
    <div className="imgWrapperContainer">
      <img src={props.src} alt={props.alt} className="imgCover mb-10" />
      <h1 className="imgCoverTitle lg:text-8xl md:text-6xl text-4xl">
        {props.title}
      </h1>
    </div>
  );
};

export default ImgWrapper;
