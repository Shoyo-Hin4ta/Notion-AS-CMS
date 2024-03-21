import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../components/ui/button"


const CMSSections = ({categories}) => {

  return (
    <div className='mt-10'>
        {categories.map((category) => (
          <Link key={category.name} to={`/category/${category.name}`}>
            <Button className='mr-4 p-6'>{category.name}</Button>
          </Link>
        ))}
    </div>
  )
}

export default CMSSections