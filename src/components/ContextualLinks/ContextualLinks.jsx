import React from 'react';
import DynamicLink from '../Shared/DynamicLink';
import recentBlogPosts from '../../../bff-data/blog.json'

import './ContextualLinks.scss';

const ContextualLinks = ({ links }) => (
  <div className="contextual-links">
    {
      links.map((item) => {
        if (item.type === 'link') {
          return (
            <div className="contextual-links__link" key={item.name}>
              <DynamicLink url={item.url} name={item.name} />
            </div>
          );
        }
        if (item.type === 'subtitle') {
          return (
            <div className="contextual-links__subtitle" key={item.name}>
              {item.name}
            </div>
          );
        }
        if (item.type === 'dynamic_blog' && item.blog_tag) {
          if (recentBlogPosts.index && recentBlogPosts.index[item.blog_tag]) {
            const dynamicLinks = recentBlogPosts.index[item.blog_tag].map(post => {
              return (
                <div className="contextual-links__link" key={post.title}>
                  <DynamicLink url={post.link.url} name={post.title} />
                </div>
              );
            })
            return (
              <>
                <div className="contextual-links__subtitle" key={item.name}>
                  {item.name}
                </div>
                {dynamicLinks}
              </>
            ) 
          } else {
            // If there are no related blog posts within blogs.json, we simply return nothing
            // This will be the case when you are developing locally
            return;
          }
        }

        return (
          <div className="contextual-links__section" key={Math.random()}>{item.name}</div>
        );
      })
    }
  </div>
);

export default ContextualLinks;
