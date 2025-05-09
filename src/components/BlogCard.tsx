
import React from 'react';
import { Link } from 'react-router-dom';

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
          <span className="text-sm text-gray-500">{post.author}</span>
          <Link to={`/blog/${post.slug}`} className="text-primary font-medium hover:text-primary/80 transition-colors">
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
