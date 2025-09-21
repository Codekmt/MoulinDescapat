import React from 'react';
import grangeDance from '../assets/img/grangeDance.jpg';
import gardenMoulin from '../assets/img/gardenMoulin.jpg';
import nightLights from '../assets/img/ambianceOutside.jpg';
import grangeGarden from '../assets/img/grangeGarden.jpg';
import sunsetWater from '../assets/img/sunsetWater.jpg';
import MoulinDescription from '../components/MoulinDescription';

const Home = () => 
{
    return (
        <>
            <div class="hidden md:flex flex-col">
                <div class="firstRow row ">
                    <img class="object-fill column"  src={grangeDance} alt="grangeDance"/>
                    <img class="column" src={grangeGarden} alt="gardenMoulin" />
                </div>
                <div class="secondRow row">
                    <div class="column2">
                    <img class="column2" src={sunsetWater} alt="groupPerforming" />
                    </div>
                    <div class="column2  bg-red-800 p-6 flex items-center justify-center just-another-hand-regular w-1/4">
                    <p className="text-4xl text-gray-200" >We’re thrilled to have you join our vibrant community of music lovers, performers, and creators.</p>
                    </div>
                    <div class="column2">
                    <img className="column2 object-cover"  src={nightLights} alt="nightLights" />
                    </div>
                </div>  
            </div>
             <div className='md:hidden flex justify-center items-center'>
                    <img className='w-full h-100  object-cover' src={grangeDance} alt="grangeDance"/>
                </div>
            <div className="bg-black just-another-hand-regular">
                <div className="sm:justify-center w-1/2 text-white p-6">
                    <MoulinDescription></MoulinDescription>
                </div>
                </div>
        </>
    );
} 

export default Home;