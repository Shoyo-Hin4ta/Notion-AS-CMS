// Body.js
import React from 'react';
import CMSSections from './CMSSections';
import useGetCategories from '../utils/useGetCategories';
import HeroSection from './HeroSectionText';

const Body = () => {
  const categories = useGetCategories();
  
  if (!categories) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-pink-100 via-yellow-100 to-pink-200">
      <HeroSection />
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">
          Explore Categories
        </h2>
        <CMSSections categories={categories} />
      </div>
    </div>
  );
};

export default Body;