import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link, useNavigate } from 'react-router-dom';

const Item = ({ pages, categoryName }) => {
  const navigate = useNavigate();

  if (!pages) return <h1 className="text-center text-2xl text-pink-800">Loading.....</h1>;

  if (pages.length === 0) return <h1 className="text-center text-2xl text-pink-800">No Content or Pages inside this category in the database.</h1>;

  if (pages.length === 1) {
    navigate(`/category/${categoryName}/pagecontent/${pages[0].id}`);
    return null;
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gradient-to-r from-pink-100 to-yellow-100">
      {pages.map((page) => (
        <Card key={page.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
          <CardHeader className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white flex-shrink-0">
            <CardTitle className="text-xl font-bold line-clamp-2">{page.properties.Name.title[0].text.content}</CardTitle>
          </CardHeader>
          <div className="flex-grow relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
            <img
              alt={page.properties.Name.title[0].text.content || "Article thumbnail"}
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={
                (page.properties['Files & media'].files.length !== 0 &&
                  page.properties['Files & media'].files[0].external &&
                  page.properties['Files & media'].files[0].external.url) ||
                (page.properties['Files & media'].files[0]?.file?.url) ||
                "/placeholder.svg"
              }
            />
          </div>
          <CardContent className="p-4 flex-shrink-0">
            <Button 
              onClick={() => navigate(`/category/${categoryName}/pagecontent/${page.id}`)}
              className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
              Open
            </Button>
          </CardContent>
        </Card>
      ))}
    </main>
  );
};

export default Item;