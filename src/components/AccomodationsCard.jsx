import React from "react";
import { Link } from "react-router-dom";
import grangeGarden from '../assets/img/grangeGarden.jpg'

const defaultCards = [
  {
    id: 1,
    title: "Chambres Du Moulin",
    description:
      "Niché au cœur des collines du Gers, en pleine nature, le Moulin d’Escapat est un lieu de ressourcement",
    image:
      grangeGarden,
    alt: "Chambres Du Moulin",
    cta: "View details",
  },
  {
    id: 2,
    title: "Caravanes Du Moulin",
    description:
      "Niché au cœur des collines du Gers, en pleine nature, le Moulin d’Escapat est un lieu de ressourcement",
    image:
      grangeGarden,
    alt: "Cozy wooden cabin in the mountains",
    cta: "Book now",
  },
  {
    id: 3,
    title: "Jardin Du Moulin",
    description:
      "Niché au cœur des collines du Gers, en pleine nature, le Moulin d’Escapat est un lieu de ressourcement",
    image:
      grangeGarden,
    alt: "Minimal workspace with laptop",
    cta: "See workspace",
  },
];

const AccommodationsCards = ({ cards = defaultCards }) => {
  return (
    <section className="mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:scale-101"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <Link
                  to={card.cta}
                  className="inline-block px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationsCards;
