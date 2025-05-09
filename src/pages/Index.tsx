
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import BlogCard, { BlogPostProps } from '../components/BlogCard';
import NewsletterForm from '../components/NewsletterForm';
import { Link } from 'react-router-dom';

// Sample blog posts data
const featuredPosts: BlogPostProps[] = [
  {
    id: '1',
    title: '10 Best AI Tools for Content Creators in 2025 (Free + Paid)',
    excerpt: 'Discover the most powerful AI tools that are revolutionizing content creation for bloggers, marketers, and creators in 2025.',
    date: 'May 8, 2025',
    author: 'Alex Morgan',
    category: 'AI Tools',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000',
    slug: '10-best-ai-tools-for-content-creators',
  },
  {
    id: '2',
    title: 'How to Use ChatGPT for SEO-Optimized Blog Writing',
    excerpt: 'Learn the exact prompts and strategies to create high-ranking, engaging blog content with ChatGPT in minutes.',
    date: 'May 5, 2025',
    author: 'Sarah Johnson',
    category: 'AI Writing',
    imageUrl: 'https://images.unsplash.com/photo-1699133510235-3d39dc978cf1?q=80&w=1000',
    slug: 'how-to-use-chatgpt-for-seo-optimized-blog-writing',
  },
  {
    id: '3',
    title: 'AI Image Generation Tools Compared: Midjourney vs DALL-E 3',
    excerpt: 'A comprehensive comparison of the top AI image generation tools to help you pick the right one for your content needs.',
    date: 'May 3, 2025',
    author: 'David Chen',
    category: 'AI Art',
    imageUrl: 'https://images.unsplash.com/photo-1686191129051-3fc933ff4cef?q=80&w=1000',
    slug: 'ai-image-generation-tools-compared',
  },
];

const recentPosts: BlogPostProps[] = [
  {
    id: '4',
    title: '7 Ways to Monetize Your AI-Generated Content in 2025',
    excerpt: 'Discover effective strategies to turn your AI-assisted content into revenue streams while maintaining authenticity.',
    date: 'Apr 29, 2025',
    author: 'Emily Porter',
    category: 'Monetization',
    imageUrl: 'https://images.unsplash.com/photo-1679958157996-b129146efa83?q=80&w=1000',
    slug: '7-ways-to-monetize-your-ai-generated-content',
  },
  {
    id: '5',
    title: 'The Ultimate Guide to Using Notion AI for Content Planning',
    excerpt: 'How to leverage Notion AI to streamline your content calendar, ideation process, and team collaboration.',
    date: 'Apr 25, 2025',
    author: 'James Wilson',
    category: 'Productivity',
    imageUrl: 'https://images.unsplash.com/photo-1693329787589-36b90575d5c8?q=80&w=1000',
    slug: 'ultimate-guide-to-notion-ai-for-content-planning',
  },
  {
    id: '6',
    title: 'AI Video Editing Tools That Will Transform Your Content',
    excerpt: 'Save hours of editing time with these powerful AI tools that can enhance, edit, and optimize your video content.',
    date: 'Apr 21, 2025',
    author: 'Lisa Wong',
    category: 'Video',
    imageUrl: 'https://images.unsplash.com/photo-1682232410297-e04c5e616b38?q=80&w=1000',
    slug: 'ai-video-editing-tools',
  },
];

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      
      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-3xl font-bold">Featured Posts</h2>
            <Link to="/blog" className="text-primary font-medium hover:underline">
              View All Posts
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <NewsletterForm />
        </div>
      </section>
      
      {/* Recent Posts */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-3xl font-bold">Recent Posts</h2>
            <Link to="/blog" className="text-primary font-medium hover:underline">
              View All Posts
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Revolutionize Your Content?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of content creators who are using AI to produce better content in less time.
          </p>
          <Link 
            to="/blog/10-best-ai-tools-for-content-creators" 
            className="btn bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-bold text-lg"
          >
            Explore Top AI Tools
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
