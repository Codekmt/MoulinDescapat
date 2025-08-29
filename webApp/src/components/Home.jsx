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
                    <div class="column">
                    <p className="text-2xl b" >We’re thrilled to have you join our vibrant community of music lovers, performers, and creators.</p>
                    </div>
                    <div class="column">
                    <img className="column"  src={nightLights} alt="nightLights" />
                    </div>
                </div>  
            </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4">Welcome to Moulin d'Escapat</h1>
                    <p className="text-lg text-gray-700">Your adventure starts here!</p>
                    <img src="/logo.png" alt="Moulin d'Escapat Logo" className="mt-6 w-32 h-32 rounded-full" />
                </div>
        </>
    );
}

export default Home;