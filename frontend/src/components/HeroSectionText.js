import React from 'react';
import { useWindup, useWindupString } from "windups";

const HeroSectionText = () => {
  // const [text] = useWindupString("To know about how the data is structured in notion. Go to Database tab", {
  //   pace: (char) => (char === " " ? 1 : 10),
  // });

  const [title] = useWindupString("Using Notion AS CMS", {
    pace: (char) => (char === " " ? 10 : 200),
  });

  return (
    <div className='w-4/5'>
    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h1>
    <blockquote className="mt-6  italic ">
      "Exploring the power and versatility of using Notion as a CMS.A dynamic and fast content managment system for myself."
    </blockquote>
    <blockquote className="mt-6  italic ">
      "To know about how the data is structured in notion. Go to Database tab"
    </blockquote>
    </div>
  )
}

export default HeroSectionText