import React from 'react';
import ImgWrapper from '../components/ImgWrapper';
import visionPhoto from '../assets/img/vision.jpg';

const About = () => {
    return (
        <div>
            <ImgWrapper src={visionPhoto} alt="AboutPhoto" title="Vision" />
        </div>
    );
};

export default About;