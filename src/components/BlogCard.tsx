import React from 'react';
import { Link } from 'react-router-dom';
import authors from '../data/authors';

export interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  slug: string;
}

const BlogCard = ({ post }: { post: BlogPostProps }) => {
  const authorDetails = authors[post.author];

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <Link to={`/blog/${post.slug}`} className="block">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span className="bg-secondary px-2 py-0.5 rounded text-xs font-medium">{post.category}</span>
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="font-bold text-xl mb-2 hover:text-primary transition-colors">{post.title}</h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {authorDetails && (
              <img 
                src={authorDetails.imageUrl} 
                alt={authorDetails.name}
                className="w-8 h-8 rounded-full object-cover mr-2"
              />
            )}
            <div>
              <span className="text-sm font-medium">{post.author}</span>
              {authorDetails?.specialization && (
                <p className="text-xs text-primary">{authorDetails.specialization}</p>
              )}
            </div>
          </div>
          <Link 
            to={`/blog/${post.slug}`} 
            className="text-primary font-medium hover:text-primary/80 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
