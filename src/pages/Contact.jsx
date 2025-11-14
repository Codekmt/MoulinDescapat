import React from 'react';
import ImgWrapper from '../components/ImgWrapper';
import grangeGarden from '../assets/img/grangeGarden.jpg'

const Contact = () => {

    return (
        <div>
  <ImgWrapper src={grangeGarden} alt="FriendsPhoto" title="Contact Us" />

  <section>
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">
        Any question about accommodations, volunteering, and others can be asked here. Please add a subject for clarification.
      </p>

      <form action="#" className="space-y-8">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
            Your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="name@flowbite.com"
            required
            className="block w-full p-2.5 text-sm text-black bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Let us know how we can help you"
            required
            className="block w-full p-3 text-sm text-black bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            placeholder="Leave a comment..."
            className="block w-full p-2.5 text-sm text-black bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white bg-primary-700 rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
          Send message
        </button>
      </form>
    </div>
  </section>
</div>

    )
};

export default Contact;
