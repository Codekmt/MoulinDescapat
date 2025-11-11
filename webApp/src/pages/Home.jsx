import React from 'react';
import grangeDance from '../assets/img/grangeDance.jpg';
import gardenMoulin from '../assets/img/gardenMoulin.jpg';
import nightLights from '../assets/img/ambianceOutside.jpg';
import grangeGarden from '../assets/img/grangeGarden.jpg';
import sunsetWater from '../assets/img/sunsetWater.jpg';
import MoulinDescription from '../components/MoulinDescription';
import franceMap from '../assets/img/franceMap.png';

const Home = () => 
{
    return (
        <>
            <section class="hidden md:flex flex-col">
                <div class="firstRow row ">
                    <img class="object-fill column"  src={grangeDance} alt="grangeDance"/>
                    <img class="column" src={grangeGarden} alt="gardenMoulin" />
                </div>
                <div class="secondRow row">
                    <div class="column2">
                    <img class="column2" src={sunsetWater} alt="groupPerforming" />
                    </div>
                    <article class="column2  bg-red-800 p-6 flex items-center justify-center just-another-hand-regular w-1/4">
                    <p className="text-4xl text-gray-200" >We’re thrilled to have you join our vibrant community of music lovers, performers, and creators.</p>
                    </article>
                    <div class="column2">
                    <img className="column2 object-cover"  src={nightLights} alt="nightLights" />
                    </div>
                </div>  
            </section>
             <div className='md:hidden flex justify-center items-center'>
                    <img className='w-full h-100  object-cover' src={grangeDance} alt="grangeDance"/>
                </div>
            <div className= " just-another-hand-regular flex flex-col md:flex-row  items-center md:items-start md:justify-center space-y-6 md:space-y-0 md:space-x-6 py-12 px-4 md:px-8">
                <article className="sm:justify-center w-3/4 md:w-1/2 flex p-6">
                    <MoulinDescription></MoulinDescription>
                </article>
                <div className="hidden md:flex md:w-1/3">
                <div className="flex flex-col mt-35">
                    <img className="flex w-full h-full object-cover" src={franceMap} alt="grangeDance" />
                        <h2 className='mt-0'>Le moulin est situé dans le gers</h2>
                        <p></p>
                    </div>
                </div>
                </div>
        </>
    );
} 

export default Home;