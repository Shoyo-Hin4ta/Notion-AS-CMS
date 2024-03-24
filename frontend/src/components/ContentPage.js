import React from 'react'
import { useParams } from 'react-router-dom'
import useGetContent from '../utils/useGetContent';
import useGetPageProperty from '../utils/useGetPageProperty';

const ContentPage = () => {

    const {pageid} = useParams();
    const {name} = useParams();

    const pageData = useGetContent(pageid);
    // const {pageTitle, created_at} = useGetPageProperty(pageid);
    const obj = useGetPageProperty(pageid);
    if(!pageData || !obj) return;

    const {pageTitle, created_at, img_url} = obj;
    // console.log(pageData);
    // console.log(img_url);
    // const pageContent =  pageData.paragraph.rich_text


    return (
        <div className="px-4 py-6 md:px-6 lg:py-12">
        <article className="prose prose-gray mx-auto dark:prose-invert">
          <div className="space-y-2 not-prose">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
              {pageTitle}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">Posted on {created_at}</p>
          </div>
         
          {img_url === "/placeholder.svg" ? null : (<figure className='mt-4 mb-5'>
            <img
              alt="Cover image"
              className="overflow-hidden rounded-lg object-cover"
              height={340}
              src={img_url}
              width="100%"
            />
            {/* <figcaption>Image caption goes here</figcaption> */}
          </figure>)}

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
                          {/* {console.log(text.text.content.split('\n'))} */}
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
        </article>
      </div>
    )
}

export default ContentPage