import React from 'react'
import HeroSectionText from './HeroSectionText'
import CMSSections from './CMSSections'
import useGetCategories from '../utils/useGetCategories'


const Body = () => {

    const categories = useGetCategories();
    if (!categories) return
    // console.log(categories[0].name)
    
    return (
        <div className ="flex justify-center items-center mt-28 border border-pink-400 gap-10">
          <div className= "ml-6">
              <img alt = "hero-img" className= "h-[450px] w-[600px]" src="https://logosandtypes.com/wp-content/uploads/2020/07/Notion.png"/>
          </div>
          <div className ="border border-blue-300 flex flex-col">
            <HeroSectionText/>
            <CMSSections categories = {categories} />
          </div>
        </div>
    )
}

export default Body