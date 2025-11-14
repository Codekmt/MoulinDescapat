import React from 'react';
import ImgWrapper from '../components/ImgWrapper';
import grangeGarden from "../assets/img/grangeGarden.jpg";
import { Link } from 'react-router-dom'

const Volunteers = () => {
    return (
        <div>
            <ImgWrapper src={grangeGarden} alt="VolunteersPhoto" title="Volunteers" />
            <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
          
          <div className="flex-shrink-0">
            <img
              src={grangeGarden}
              alt="Moulin d’Escapat"
              className="w-full md:w-96 h-96 object-cover rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-6">Join Us as a Volunteer</h1>
            <p className="text-gray-700 mb-4">
              At Moulin d’Escapat, we love welcoming visitors who want to be part
              of our vibrant community. During the season, we open our doors to
              volunteers who wish to stay with us and help out in exchange for
              meals and accommodation.
            </p>
            <p className="text-gray-700 mb-6">
              Whether you’re passionate about music, nature, or simply want to
              experience life at the moulin, volunteering with us is a unique
              opportunity to connect, learn, and contribute. Every helping hand
              makes a difference, and we’re excited to meet people from all
              walks of life who want to be part of our story.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </section>
        </div>
    );
}

export default Volunteers;
