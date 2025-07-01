import React from 'react';
import grangeDance from '../assets/img/grangeDance.png';
import groupPerforming from '../assets/img/groupPerforming.png';
import imgGrange from '../assets/img/imgGrange.png';
import peopleChilling from '../assets/img/peopleChilling.png';

const Home = () => 
{
    return (
        <>
        <div className='flex flex-wrap bg-gray-100'>
            <img src={grangeDance} alt="grangeDance" />
            <img src={imgGrange} alt="imgGrange" />
        </div>
        <div className='flex flex-wrap bg-gray-100'>
            <img src={groupPerforming} alt="groupPerforming" />
            <p>We’re thrilled to have you join our vibrant community of music lovers, performers, and creators.</p>
            <img src={peopleChilling} alt="peopleChilling" />   
        </div>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to Moulin d'Escapat</h1>
            <p className="text-lg text-gray-700">Your adventure starts here!</p>
            <img src="/logo.png" alt="Moulin d'Escapat Logo" className="mt-6 w-32 h-32 rounded-full" />
        </div>
        </>
    );
}

export default Home;