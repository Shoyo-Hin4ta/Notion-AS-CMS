import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Button } from "../components/ui/button"
import { Link, useNavigate } from 'react-router-dom';

const Item = ({pages, categoryName}) => {

  // useEffect(() => {
  //   if(pages && pages.length===1){
  //       const page = pages[0];
  //       // navigate('/category/'+categoryName+'/pagecontent/'+page.id);
  //   }
  // },[])

  const navigate= useNavigate();

  if(!pages) return<h1>Loading.....</h1>

  if (pages.length === 0) return <h1>{"No Content or Pages inside this category in the database."}</h1>

  // if (pages.length === 1){
  //   const page = pages[0];
  //   navigate('/category/'+categoryName+'/pagecontent/'+page.id);
  // }


  

  // console.log(pages[1].properties['Files & media'].files[0].name)

  return (
    <>
      {pages.length === 1 ? navigate('/category/'+categoryName+'/pagecontent/'+pages[0].id) : (
        <main className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {pages.map((page) => (
            <div key={page.id} className="flex flex-col gap-2">
              <Card style={{ width: '100%', height: '100%' }}>
                <CardHeader>
                  <CardTitle className="text-2xl">{page.properties.Name.title[0].text.content}</CardTitle>
                </CardHeader>
                <Link className="flex aspect-video overflow-hidden rounded-md" to={`/category/${categoryName}/pagecontent/${page.id}`}>
                  <img
                    alt="No Image uploaded in notion"
                    className="object-cover w-full h-[225px] shimmer"
                    height={225}
                    src={
                      (page.properties['Files & media'].files.length !== 0 &&
                        page.properties['Files & media'].files[0].external &&
                        page.properties['Files & media'].files[0].external.url) ||
                      (page.properties['Files & media'].files[0]?.file?.url) ||
                      "/placeholder.svg"
                    }
                    style={{
                      aspectRatio: "400/225",
                      objectFit: "cover",
                      width: '100%', height: '100%'
                    }}
                    width={400}
                  />
                </Link>
                <CardContent className="grid place-items-center">
                  <Button onClick={() => navigate(`/category/${categoryName}/pagecontent/${page.id}`)}>Open</Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </main>
      )}
    </>
  );
  
}

export default Item