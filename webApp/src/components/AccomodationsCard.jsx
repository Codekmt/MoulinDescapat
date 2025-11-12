import React from "react";

const defaultCards = [
  {
    id: 1,
    title: "Cozy Apartment",
    description: "A bright, modern apartment in the city center — perfect for short stays.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
    alt: "Modern apartment living room",
    cta: "View details",
  },
  {
    id: 2,
    title: "Mountain Cabin",
    description: "Rustic cabin with stunning mountain views and a fireplace.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    alt: "Cozy wooden cabin in the mountains",
    cta: "Book now",
  },
  {
    id: 3,
    title: "Minimal Workspace",
    description: "A quiet desk setup with natural light, ideal for focused work.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
    alt: "Minimal workspace with laptop",
    cta: "See workspace",
  },
  {
    id: 4,
    title: "Urban Rooftop",
    description: "Rooftop terrace with city skyline views and evening lighting.",
    image: "https://images.unsplash.com/photo-1505691723518-36a72f1a0b1a?auto=format&fit=crop&w=800&q=60",
    alt: "Rooftop terrace with city view",
    cta: "Explore",
  },
];

export default function AccommodationsCards({ cards = defaultCards }) {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <article
            key={card.id}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-md overflow-hidden border border-gray-100 dark:border-slate-700 transform transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>

            <div className="p-4 md:p-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                {card.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {card.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full">
                    2 guests
                  </span>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full">
                    1 bed
                  </span>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold bg-yellow-400 hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-600 text-slate-900"
                  onClick={() => {
                    alert(`${card.title} — ${card.cta}`);
                  }}
                >
                  {card.cta}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

