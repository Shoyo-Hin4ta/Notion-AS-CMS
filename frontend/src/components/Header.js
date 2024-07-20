import React from 'react';
import { Link } from 'react-router-dom';
import useGetCategories from '../utils/useGetCategories';

const Header = () => {
  useGetCategories();

  return (
    <header className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold hover:text-pink-100 transition duration-300">
          Notion as CMS
        </Link>
        <nav>
          <Link to="/" className="text-lg font-medium hover:text-pink-100 transition duration-300">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;