import React from 'react';
import { useWindupString } from "windups";

const HeroSection = () => {
  const [title] = useWindupString("Using Notion AS CMS", {
    pace: (char) => (char === " " ? 10 : 200),
  });

  return (
    <div className="bg-gradient-to-r from-pink-400 to-yellow-400 rounded-lg shadow-2xl overflow-hidden mb-16">
      <div className="px-8 py-16 sm:px-12 sm:py-24 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left max-w-2xl">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
            {title}
          </h1>
          <p className="text-lg text-pink-100 sm:text-xl mb-8">
            Exploring the power and versatility of using Notion as a CMS. 
            A dynamic and fast content management system for myself.
          </p>
          <p className="text-lg text-pink-100 sm:text-xl">
            To know about how the data is structured in notion, go to the Database section.
          </p>
        </div>
        <div className="mt-10 md:mt-0 md:ml-10 flex-shrink-0">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
            alt="Notion Logo"
            className="w-40 h-40 object-contain bg-white rounded-full p-4 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;