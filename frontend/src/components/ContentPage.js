import React from 'react';
import { useParams } from 'react-router-dom';
import useGetContent from '../utils/useGetContent';
import useGetPageProperty from '../utils/useGetPageProperty';

const ContentPage = () => {
  const { pageid } = useParams();
  const pageData = useGetContent(pageid);
  const obj = useGetPageProperty(pageid);

  if (!pageData || !obj) return null;

  const { pageTitle, created_at, img_url } = obj;

  return (
    <div className="px-4 py-6 md:px-6 lg:py-12 bg-gradient-to-b from-pink-50 to-yellow-50">
      <article className="prose prose-pink mx-auto">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem] text-pink-600">
            {pageTitle}
          </h1>
          <p className="text-yellow-600">Posted on {created_at}</p>
        </div>

        {img_url !== "/placeholder.svg" && (
          <figure className='mt-4 mb-5'>
            <img
              alt={pageTitle || "Article cover"}
              className="overflow-hidden rounded-lg object-cover"
              height={340}
              src={img_url}
              width="100%"
            />
          </figure>
        )}

        {pageData.map((content, index) => (
          <div key={index} className="my-4">
            {content.paragraph.rich_text.length > 0 && (
              content.paragraph.rich_text.map((text, i) => {
                let styleClass = 'text-pink-800 ';

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
                      className={'text-yellow-600 hover:underline ' + styleClass}
                    >
                      {text.text.content}
                    </a>
                  );
                } else {
                  return (
                    <span key={i} className={'text-base ' + styleClass}>
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
        ))}
      </article>
    </div>
  );
};

export default ContentPage;