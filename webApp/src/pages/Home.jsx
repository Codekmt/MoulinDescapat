import React from 'react';
import grangeDance from '../assets/img/grangeDance.jpg';
import gardenMoulin from '../assets/img/gardenMoulin.jpg';
import nightLights from '../assets/img/ambianceOutside.jpg';
import grangeGarden from '../assets/img/grangeGarden.jpg';
import sunsetWater from '../assets/img/sunsetWater.jpg';
import MoulinDescription from '../components/MoulinDescription';
import franceMap from '../assets/img/franceMap.png';
import HomePageCards from '../components/HomepageCards';
import SeasonalWrapper from '../components/SeasonalWrapper';

const Home = () => 
{
    return (
        <>
            <section class="hidden md:flex flex-col relative z-15">
                <div class="firstRow row ">
                    <img class="object-fill column"  src={grangeDance} alt="grangeDance"/>
                    <img class="column" src={grangeGarden} alt="gardenMoulin" />
                </div>
                <div class="secondRow row">
                    <div class="column2">
                        <img class="column2" src={sunsetWater} alt="groupPerforming" />
                    </div>
                        <article class="column2  bg-red-800 p-6 flex items-center justify-center just-another-hand-regular w-1/4">
                            <p className="text-base sm:text-lg md:text-2xl lg:text-4xl text-gray-200" >We’re thrilled to have you join our vibrant community of music lovers, performers, and creators.</p>
                        </article>
                    <div class="column2">
                        <img className="column2 object-cover"  src={nightLights} alt="nightLights" />
                    </div>
                </div>  
            </section>
                <div className='md:hidden  flex justify-center items-center'>
                    <img className='w-full h-100  object-cover' src={grangeDance} alt="grangeDance"/>
                </div>

                <div className='md:ml-26 mt-20 text-center'>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Bienvenue au Moulin d’Escapat</h1>
                </div>
                <section className= "m-20 mt-0 flex flex-col md:flex-row md:items-start md:space-x-8 py-12 px-4 md:px-0 border-dashed border-b-2">
                    <article className=" md:w-1/2 flex">
                        <MoulinDescription></MoulinDescription>
                    </article>
                <div className="hidden md:flex md:w-1/3 md:ml-20 lg:ml-50">
                    <div className="flex flex-col">
                        <img className="flex-row w-full h-full object-cover" src={franceMap} alt="mapOfFrance" />
                            <h2 className='flex-row text-center'>Le moulin est situé dans le coeur du gers</h2>
                            <p className="text-center mt-3">Le moulin est situé dans le Gers, entre Toulouse et Bordeaux. 50km d'Auch</p>
                    </div>
                    </div>
                    </section>
                <HomePageCards />
                    

        </>
    );
} 

export default Home;