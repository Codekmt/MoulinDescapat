import react from "react";
import grangeGarden from "../assets/img/grangeGarden.jpg"
import { Link } from "react-router-dom";


const homepageCards = [
    { 
        id: 1,
        title: 'Vision',
        image: grangeGarden,
        description: 'Add some description for this card',
        alt: "Photo of Vision page",
        href: '/vision',
    },
    {
        id: 2, 
        title: 'Accomodations',
        image: grangeGarden, 
        description: 'Add some description for this card', 
        alt: 'Photo of Accomodations page',
        href: '/accomodations', 
    },

    {
        id: 3, 
        title: 'Copains Du Moulin', 
        image: grangeGarden,
        description: 'Add some description for this card', 
        alt: 'Photo of Copains Du Moulin page',
        href: '/cpm'
    }, 

    {
        id: 4, 
        title: 'Association', 
        image: grangeGarden, 
        description: 'Add some description for this card.',
        alt: 'Photo of Association page',
        href: '/association'
    }
]
const HomePageCards = ({ cards = homepageCards }) => {
  return (
    <section className="mb-20">
      <div className="m-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="m-10 grid gap-8 grid-cols-2 lg:grid-cols-4">
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
                to={card.href}
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
export default HomePageCards;