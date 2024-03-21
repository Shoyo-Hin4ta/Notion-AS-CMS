import React from 'react'
import HeroSectionText from './HeroSectionText'
import CMSSections from './CMSSections'

const Body = () => {


    return (
        <div className ="border border-black">
          <div className= "">
              <img alt = "hero-img" className= "h-[400px] w-[250px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6snmI_d7LV1OvPvbirkq3NqEMnhpSYg8RA&usqp=CAU"/>
          </div>
          <div className ="border border-black">
            <HeroSectionText/>
            <CMSSections/>
          </div>
        </div>
    )
}

export default Body