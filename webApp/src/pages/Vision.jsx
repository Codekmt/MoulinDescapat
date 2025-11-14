import React from 'react';
import ImgWrapper from '../components/ImgWrapper';
import visionPhoto from '../assets/img/vision.jpg';

const Vision = () => {
    return (
        <div>
            <ImgWrapper src={visionPhoto} alt="AboutPhoto" title="Vision" />
            <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto space-y-16">
  <section className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
    <img
      src={visionPhoto}
      alt="Vision"
      className="w-full md:w-80 h-80 object-cover rounded-2xl mb-6 md:mb-0 md:mr-12 transform transition-transform duration-300"
    />
    <div className="flex-1">
      <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
      <p className="text-gray-700 mb-4">
        At Moulin d'Escapat, we envision a world where music and community
        come together to create unforgettable experiences. Our mission is to
        provide a welcoming space for artists and audiences alike, fostering
        creativity, connection, and joy through the power of live performance.
      </p>
      <p className="text-gray-700">
        We strive to offer workshops, performances, and events that engage
        everyone, from aspiring musicians to longtime enthusiasts. Every note,
        every gathering, every moment is designed to inspire, connect, and
        leave a lasting memory.
      </p>
    </div>
  </section>

  <section className="flex flex-col md:flex-row items-center bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
    <div className="flex-1 md:mr-12 mb-6 md:mb-0">
      <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
      <p className="text-gray-700 mb-4">
        Moulin d'Escapat is committed to nurturing creativity and community. We
        believe in the transformative power of art and music to bring people
        together and spark joy in everyday life.
      </p>
      <p className="text-gray-700">
        Through curated events, local collaborations, and a welcoming
        environment, we aim to be a hub for inspiration, collaboration, and
        unforgettable memories for everyone who visits.
      </p>
    </div>
    <img
      src={visionPhoto}
      alt="Mission"
      className="w-full md:w-80 h-80 object-cover rounded-2xl md:ml-12 transform transition-transform duration-300 hover:scale-105"
    />
  </section>
</div>

        </div>
    );
};

export default Vision;