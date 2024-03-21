import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Button } from "../components/ui/button"
import { Link } from 'react-router-dom';

const Item = ({pages}) => {

  console.log(pages);

  if (pages.length === 0) return <h1>{"No Content / Pages inside"}</h1>

  // console.log(pages[1].properties['Files & media'].files[0].name)

  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
    {pages.map((page) => 
      (
        <div key={page.id} className="flex flex-col gap-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{page.properties.Name.title[0].text.content}</CardTitle>
            </CardHeader>
            <Link className="flex aspect-video overflow-hidden rounded-md" href="#">
              <img
                alt="Shimmer Loading"
                className="object-cover w-full h-[225px] shimmer"
                height={225}
                src={page.properties['Files & media'].files.length !== 0 
                ? page.properties['Files & media'].files[0].name :
                "/placeholder.svg"}
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width={400}
              />
            </Link>
            <CardContent className="grid gap-4">
              <Button>Open the Blog</Button>
            </CardContent>
          </Card>
        </div>
      
      )
    )}
    </main>

  )
}

export default Item