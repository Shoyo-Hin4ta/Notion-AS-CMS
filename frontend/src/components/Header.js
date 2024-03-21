import React from 'react'
import useGetCategories from '../utils/useGetCategories'
import { Link } from 'react-router-dom';



const Header = () => {

  useGetCategories();

  return (
    <header className="flex items-center justify-between h-20 px-4 md:px-6">
        <h1 className="text-3xl font-bold">Using Notion as CMS</h1>
        <nav className="hidden lg:flex space-x-6">
          <Link to = "/" className="text-lg font-medium" href="#">
            Home
          </Link>
        </nav>
      </header>
  )
}

export default Header