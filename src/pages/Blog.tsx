import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import BlogCard, { BlogPostProps } from '../components/BlogCard';
import { Link } from 'react-router-dom';

// Sample blog posts data (combined all posts)
const allPosts: BlogPostProps[] = [
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
  {
    id: '7',
    title: 'Ethical Considerations When Using AI for Content Creation',
    excerpt: 'Navigate the complex ethical landscape of AI-generated content with these guidelines and best practices.',
    date: 'Apr 18, 2025',
    author: 'Michael Brown',
    category: 'Ethics',
    imageUrl: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1000',
    slug: 'ethical-considerations-ai-content-creation',
  },
  {
    id: '8',
    title: 'How to Use AI Tools While Maintaining Your Authentic Voice',
    excerpt: 'Practical strategies for leveraging AI content tools without losing your unique style and perspective.',
    date: 'Apr 15, 2025',
    author: 'Rachel Green',
    category: 'Writing',
    imageUrl: 'https://images.unsplash.com/photo-1546753051-f9af5a0f8294?q=80&w=1000',
    slug: 'maintaining-authentic-voice-with-ai-tools',
  },
  {
    id: '9',
    title: 'The Future of AI in Content Marketing: Trends for 2026',
    excerpt: 'Expert predictions on how AI will continue to transform the content marketing landscape in the coming year.',
    date: 'Apr 10, 2025',
    author: 'Thomas Wright',
    category: 'Trends',
    imageUrl: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1000',
    slug: 'future-of-ai-content-marketing-trends',
  },
  {
    id: '10',
    title: 'How AI Audio Tools Are Changing Podcast Production',
    excerpt: 'Explore how AI-powered audio enhancement, transcription, and editing tools are revolutionizing podcast workflows.',
    date: 'Apr 5, 2025',
    author: 'Jamie Scott',
    category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000',
    slug: 'ai-audio-tools-podcast-production',
  },
  {
    id: '11',
    title: 'Case Study: How We Doubled Our Traffic Using AI Content Tools',
    excerpt: 'A detailed breakdown of our content strategy that leveraged AI to significantly increase organic traffic in 6 months.',
    date: 'Apr 1, 2025',
    author: 'Alex Morgan',
    category: 'Case Studies',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
    slug: 'case-study-doubled-traffic-ai-content-tools',
  },
  {
    id: '12',
    title: 'GPT-5 vs. Claude 3: Which AI Is Better for Content Creation?',
    excerpt: 'An in-depth comparison of the latest large language models and their specific strengths for different content tasks.',
    date: 'Mar 28, 2025',
    author: 'David Chen',
    category: 'AI Tools',
    imageUrl: 'https://images.unsplash.com/photo-1676277779578-bde0beca4c71?q=80&w=1000',
    slug: 'gpt5-vs-claude3-content-creation-comparison',
  },
  {
    id: '13',
    title: 'How to Build a Content Workflow That Combines AI and Human Expertise',
    excerpt: 'Create a hybrid content production system that maximizes AI efficiency while preserving human creativity and oversight.',
    date: 'Mar 25, 2025',
    author: 'Sarah Johnson',
    category: 'Productivity',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000',
    slug: 'ai-human-hybrid-content-workflow',
  },
  {
    id: '14',
    title: 'AI-Powered Content Repurposing: One Piece, 10 Formats',
    excerpt: 'Learn how to efficiently transform a single piece of content into multiple formats using AI tools and smart workflows.',
    date: 'Mar 21, 2025',
    author: 'Emily Porter',
    category: 'Repurposing',
    imageUrl: 'https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?q=80&w=1000',
    slug: 'ai-content-repurposing-strategies',
  },
  {
    id: '15',
    title: 'The Psychology of AI Content: Why Some AI Text Feels "Off"',
    excerpt: 'Understanding the subtle cues that make AI-generated content feel unnatural and how to fix them in your writing.',
    date: 'Mar 18, 2025',
    author: 'Michael Brown',
    category: 'Psychology',
    imageUrl: 'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?q=80&w=1000',
    slug: 'psychology-ai-content-human-connection',
  },
  {
    id: '16',
    title: 'Legal Considerations for AI-Generated Content in 2025',
    excerpt: 'Navigate the evolving legal landscape surrounding copyright, disclosure requirements, and liability for AI content.',
    date: 'Mar 15, 2025',
    author: 'Jennifer Lee, Esq.',
    category: 'Legal',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000',
    slug: 'legal-considerations-ai-generated-content',
  },
  {
    id: '17',
    title: 'How to Fine-Tune Your Own AI Model for Brand-Specific Content',
    excerpt: 'A step-by-step guide to training a custom AI model that writes in your brand voice with consistent terminology.',
    date: 'Mar 12, 2025',
    author: 'James Wilson',
    category: 'Advanced AI',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000',
    slug: 'fine-tune-ai-model-brand-voice',
  },
  {
    id: '18',
    title: 'AI Content Detection: How It Works and How to Avoid Flags',
    excerpt: 'Understanding AI content detection systems and ethical strategies to ensure your AI-assisted content passes authenticity checks.',
    date: 'Mar 8, 2025',
    author: 'Rachel Green',
    category: 'AI Tools',
    imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1000',
    slug: 'ai-content-detection-avoiding-flags',
  },
];

// Available categories from posts
const categories = [...new Set(allPosts.map(post => post.category))];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory 
    ? allPosts.filter(post => post.category === selectedCategory)
    : allPosts;

  return (
    <MainLayout>
      {/* Blog Header */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Insights, tutorials, and tips on using AI tools to create better content faster.
          </p>
        </div>
      </section>
      
      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-2">No posts found</h3>
              <p className="text-gray-600">Try selecting a different category or check back later.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="py-16 bg-blue-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-gray-600">
              Get weekly tips and tools for AI-powered content creation.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="btn btn-primary px-8 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;
