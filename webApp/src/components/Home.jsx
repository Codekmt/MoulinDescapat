import React from 'react';
import grangeDance from '../assets/img/grangeDance.jpg';
import groupPerforming from '../assets/img/performing.jpg';
import gardenMoulin from '../assets/img/gardenMoulin.jpg';
import nightLights from '../assets/img/ambianceOutside.jpg';

const Home = () => 
{
    return (
        <>
            <div>
                <div class="firstRow row ">
                    <img class="object-fill column"  src={grangeDance} alt="grangeDance"/>
                    <img class="column" src={gardenMoulin} alt="gardenMoulin" />
                </div>
                <div class="secondRow row">
                    <div class="column">
                    <img class="column" src={groupPerforming} alt="groupPerforming" />
                    </div>
                    <div class="column  bg-red-500 p-6 flex items-center justify-center just-another-hand-regular w-1/4">
                    <p className="text-4xl text-gray-200" >We’re thrilled to have you join our vibrant community of music lovers, performers, and creators.</p>
                    </div>
                    <div class="column">
                    <img className="column"  src={nightLights} alt="nightLights" />
                    </div>
                </div>  
            </div>
            <div className="bg-black just-another-hand-regular">
                <div className="w-1/2 text-white p-6">
                    <h1 className="text-4xl  mb-4">Welcome to Moulin d'Escapat</h1>
                    <p className="text-lg text-gray-300">We’re thrilled to have you join our vibrant community of music lovers, performers, and creators. Whether you’re here to sing, play, compose, or simply enjoy the beauty of music, you’ve found the right place.
At Moulin d’Escapat, we believe music brings people together, transcending boundaries and creating unforgettable moments. Throughout the year, you'll have the chance to participate in concerts, workshops, jam sessions, and many other musical adventures.
🎵</p>
                </div>
                </div>
        </>
    );
} 

export default Home;