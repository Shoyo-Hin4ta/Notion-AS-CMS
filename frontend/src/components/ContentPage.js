import React from 'react'
import { useParams } from 'react-router-dom'
import useGetContent from '../utils/useGetContent';

const ContentPage = () => {

    const {pageid} = useParams();
    const {name} = useParams();

    const pageData = useGetContent(pageid);

    if(!pageData) return
    console.log(pageData)
    // const pageContent =  pageData.paragraph.rich_text


    return (
        <div className="px-4 py-6 md:px-6 lg:py-12">
        <article className="prose prose-gray mx-auto dark:prose-invert">
          <div className="space-y-2 not-prose">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
              Taxing Laughter: The Joke Tax Chronicles
            </h1>
            <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
          </div>
          <p>
            Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One
            day, his advisors came to him with a problem: the kingdom was running out of money.
          </p>
         
          <figure>
            <img
              alt="Cover image"
              className="aspect-video overflow-hidden rounded-lg object-cover"
              height={340}
              src="/placeholder.svg"
              width={1250}
            />
            <figcaption>Image caption goes here</figcaption>
          </figure>

          {(
            pageData.map((content, index) => (
              <div key={index} className="my-4">
                {content.paragraph.rich_text.length > 0 && (
                  content.paragraph.rich_text.map((text, i) => {
                    
                    // text.text.content = text.text.content.replace(/\n/g, '\n');
                    let styleClass = '';
      
                    if (text.annotations) {
                      styleClass += text.annotations.bold ? ' font-bold' : '';
                      styleClass += text.annotations.italic ? ' italic' : '';
                      styleClass += text.annotations.underline ? ' underline' : '';
                      styleClass += text.annotations.strikethrough ? ' line-through' : '';
                    }
      
                    if (text.text.link) {
                      return (
                        <a
                          key={i}
                          href={text.text.link.url}
                          className={'text-blue-500 hover:underline' + styleClass}
                        >
                          {text.text.content}
                        </a>
                      );
                    } else {
                      return (
                        <span
                          key={i}
                          className={'text-base' + styleClass} // Default font size can be adjusted
                        >
                          {console.log(text.text.content.split('\n'))}
                          {text.text.content.split('\n').map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                        </span>
                      );
                    }
                  })
                )}
              </div>
            ))
          )}
          <p>
            The king thought long and hard, and finally came up with
            <a href="#">a brilliant plan</a>: he would tax the jokes in the kingdom.
          </p>
          
        </article>
      </div>
    )
}

export default ContentPage