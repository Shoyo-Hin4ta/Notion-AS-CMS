import React from 'react';
import { Link } from 'react-router-dom';

const CMSSections = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.name}`}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
          <div className="bg-gradient-to-r from-pink-400 to-yellow-400 p-6">
            <h2 className="text-2xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
              {category.name}
            </h2>
          </div>
          <div className="p-4 flex justify-between items-center">
            <span className="text-pink-600 font-medium">Explore content</span>
            <span className="bg-yellow-400 text-pink-700 text-sm px-3 py-1 rounded-full group-hover:bg-pink-400 group-hover:text-white transition-colors duration-300">
              View
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CMSSections;