import React from 'react';
import ImgWrapper from '../components/ImgWrapper';
import visionPhoto from '../assets/img/vision.jpg';

const About = () => {
    return (
        <div>
            <ImgWrapper src={visionPhoto} alt="AboutPhoto" title="Vision" />
            <div class="container p-20">
                <div class="content flex">
                    <img src={visionPhoto} alt="Vision" class="hidden md:block w-80 h-80 object-cover rounded-2xl mr-15"/>
                    <div>
                    <h1 class="text-5xl flex justify-between items center">Our Vision</h1>
                    <p>At Moulin d'Escapat, we envision a world where music and community come together to create unforgettable experiences. Our mission is to provide a welcoming space for artists and audiences alike, fostering creativity, connection, and joy through the power of live performance.</p>
                    </div>
                </div> 
                <div class="content flex">
                    <div>
                    <h1 class="text-5xl flex justify-between items center">Our Vision</h1>
                    <p>At Moulin d'Escapat, we envision a world where music and community come together to create unforgettable experiences. Our mission is to provide a welcoming space for artists and audiences alike, fostering creativity, connection, and joy through the power of live performance.</p>
                    </div>
                    <img src={visionPhoto} alt="Vision" class="hidden md:block w-80 h-80 object-cover rounded-2xl ml-15"/>
                </div>   
            </div>

        </div>
    );
};

export default About;