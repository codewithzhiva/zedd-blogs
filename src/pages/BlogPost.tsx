
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import NewsletterForm from '../components/NewsletterForm';
import AuthorBio from '../components/AuthorBio';
import { BlogPostProps } from '../components/BlogCard';

// Sample blog posts data (same as in Blog.tsx)
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
  // ... add the rest of the posts
];

// Sample full blog post content for '10 Best AI Tools for Content Creators in 2025'
const featuredPostContent = `
<h2>Introduction: The Rise of AI in Content Creation</h2>

<p>The content creation landscape has transformed dramatically over the past few years. What once required teams of writers, editors, designers, and video producers can now be accomplished by a single creator with the right AI tools at their disposal.</p>

<p>In 2025, AI tools have become indispensable for content creators looking to stay competitive and productive. Whether you're a blogger, marketer, YouTuber, or social media influencer, these tools can help you create higher-quality content in less time.</p>

<p>But with hundreds of AI tools flooding the market, which ones are actually worth your time and money? I've tested over 50 AI tools and selected the 10 best options based on ease of use, output quality, features, and value for money.</p>

<h2>How We Evaluated These AI Tools</h2>

<p>Before diving into the list, here's how we evaluated each tool:</p>

<ul>
  <li><strong>Ease of use:</strong> Is the tool intuitive enough for beginners?</li>
  <li><strong>Output quality:</strong> How good is the content produced by the tool?</li>
  <li><strong>Cost:</strong> Is the pricing reasonable for the value provided?</li>
  <li><strong>Integrations:</strong> Does it work well with other tools in your workflow?</li>
  <li><strong>Unique features:</strong> What makes this tool stand out from competitors?</li>
</ul>

<h2>1. Jasper</h2>

<p><strong>Best for:</strong> Comprehensive AI writing across multiple formats</p>

<p>Jasper (formerly Jarvis) remains the gold standard for AI content creation in 2025. Its latest model produces remarkably human-like writing across blog posts, social media, emails, and marketing copy.</p>

<p>The new "Content Campaigns" feature allows you to plan and execute entire content strategies from a single dashboard, while the built-in SEO features help ensure your content ranks well.</p>

<h3>Key Features:</h3>

<ul>
  <li>AI Content Generator with over 50 templates</li>
  <li>Boss Mode for long-form content</li>
  <li>Chrome extension for writing anywhere online</li>
  <li>Brand voice customization</li>
  <li>Team collaboration tools</li>
</ul>

<h3>Pricing:</h3>
<p>Starting at $49/month for Creator plan, $125/month for Teams</p>

<h2>2. Copy.ai</h2>

<p><strong>Best for:</strong> Quick marketing copy and social media content</p>

<p>Copy.ai has evolved from a simple copywriting tool to a comprehensive platform for marketers and social media managers. Its strength lies in generating short-form content quickly - I've found it particularly useful for creating social media posts, headlines, and product descriptions.</p>

<h3>Key Features:</h3>

<ul>
  <li>90+ templates for different marketing needs</li>
  <li>Multi-lingual content generation</li>
  <li>Content Briefs 2.0 feature</li>
  <li>Brand voice customization</li>
  <li>Free plan available</li>
</ul>

<h3>Pricing:</h3>
<p>Free plan with limited features, Pro plan starts at $36/month</p>

<h2>3. Pictory</h2>

<p><strong>Best for:</strong> Converting articles to engaging videos</p>

<p>Pictory has revolutionized how content creators repurpose their written content into video format. Simply paste your blog post URL or text, and Pictory will create a video with visuals, captions, and even voiceover.</p>

<h3>Key Features:</h3>

<ul>
  <li>Automatic script-to-video conversion</li>
  <li>Stock footage library with millions of clips</li>
  <li>AI voiceover in multiple languages and accents</li>
  <li>Auto-captioning with customizable styles</li>
  <li>Brand customization (colors, logos, etc.)</li>
</ul>

<h3>Pricing:</h3>
<p>Starting at $23/month for Standard plan</p>

<h2>4. Descript</h2>

<p><strong>Best for:</strong> Podcast and video editing with AI</p>

<p>Descript continues to push the boundaries of what's possible in audio and video editing. Their 2025 update introduced mind-blowing features like AI-generated B-roll, automatic content repurposing, and even more realistic voice cloning.</p>

<h3>Key Features:</h3>

<ul>
  <li>Text-based audio and video editing</li>
  <li>Overdub (AI voice cloning)</li>
  <li>Studio Sound for professional audio quality</li>
  <li>Automatic filler word removal</li>
  <li>AI-generated B-roll suggestion and insertion</li>
</ul>

<h3>Pricing:</h3>
<p>Free plan available, Creator plan at $15/month, Pro at $30/month</p>

<h2>5. Frase</h2>

<p><strong>Best for:</strong> SEO-optimized content creation</p>

<p>Frase has established itself as the premier AI tool for SEO-focused content creation. Its ability to analyze top-ranking content and provide actionable recommendations sets it apart from general-purpose AI writers.</p>

<h3>Key Features:</h3>

<ul>
  <li>SERP analysis for any keyword</li>
  <li>Content brief generator</li>
  <li>AI writing assistant</li>
  <li>Content optimization recommendations</li>
  <li>Question research tool</li>
</ul>

<h3>Pricing:</h3>
<p>Starting at $44.99/month for Solo plan, $114.99/month for Basic team plan</p>

<h2>Comparison Table: Top 5 AI Content Tools</h2>

<table>
  <thead>
    <tr>
      <th>Tool</th>
      <th>Best For</th>
      <th>Starting Price</th>
      <th>Free Plan</th>
      <th>Standout Feature</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jasper</td>
      <td>All-around content creation</td>
      <td>$49/month</td>
      <td>No</td>
      <td>Content Campaigns</td>
    </tr>
    <tr>
      <td>Copy.ai</td>
      <td>Marketing copy</td>
      <td>$36/month</td>
      <td>Yes</td>
      <td>Multi-lingual support</td>
    </tr>
    <tr>
      <td>Pictory</td>
      <td>Article-to-video conversion</td>
      <td>$23/month</td>
      <td>No</td>
      <td>Automatic B-roll</td>
    </tr>
    <tr>
      <td>Descript</td>
      <td>Podcast/video editing</td>
      <td>$15/month</td>
      <td>Yes</td>
      <td>Text-based editing</td>
    </tr>
    <tr>
      <td>Frase</td>
      <td>SEO content</td>
      <td>$44.99/month</td>
      <td>No</td>
      <td>SERP analysis</td>
    </tr>
  </tbody>
</table>

<h2>Final Verdict: The Best AI Tool Stack for Content Creators</h2>

<p>After testing dozens of tools and combinations, I've found that the most effective stack for most content creators in 2025 is:</p>

<ul>
  <li><strong>Jasper + Frase</strong> for blog content</li>
  <li><strong>Descript</strong> for podcast and video editing</li>
  <li><strong>Pictory</strong> for repurposing content into short-form videos</li>
</ul>

<p>This combination provides the best balance of quality, versatility, and cost-effectiveness for most content creators. If you're just starting out, begin with Jasper as your foundation and add the others as your needs expand.</p>

<h2>Conclusion: The Future of AI Content Creation</h2>

<p>The AI content creation landscape continues to evolve rapidly. While these tools are powerful, remember that the most successful content creators use AI as an enhancement to their creativity, not a replacement for their unique voice and expertise.</p>

<p>As we move further into 2025, we can expect these tools to become even more sophisticated, with improved personalization, better understanding of context, and more seamless integration into creative workflows.</p>

<p>What AI tools are you currently using in your content creation process? Share your experiences in the comments below!</p>
`;

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the post that matches the slug
  const post = allPosts.find(post => post.slug === slug);

  // If post doesn't exist, show a not found message
  if (!post) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="btn btn-primary">
            Browse All Posts
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Blog Post Header */}
      <header className="bg-gray-50 py-16">
        <div className="container max-w-4xl">
          <div className="mb-4 flex items-center">
            <Link to="/blog" className="text-primary hover:underline mr-2">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="bg-secondary px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center text-gray-600">
            <span className="mr-4">{post.date}</span>
            <span className="mr-4">•</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </header>
      
      {/* Featured Image */}
      <div className="container max-w-4xl py-8">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-auto aspect-video object-cover rounded-lg shadow-md"
        />
      </div>
      
      {/* Blog Content */}
      <article className="container max-w-4xl py-8">
        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ 
            __html: slug === '10-best-ai-tools-for-content-creators' 
              ? featuredPostContent 
              : `<p>${post.excerpt}</p><p>Full content for this post is coming soon.</p>` 
          }}
        />
        
        {/* Author Bio */}
        <AuthorBio 
          name={post.author}
          bio="Content marketing expert specializing in AI tools and productivity systems. Helping creators and businesses leverage technology to create better content."
          imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000"
        />
        
        {/* Share Buttons */}
        <div className="border-t border-b py-4 my-8">
          <div className="flex items-center justify-between">
            <span className="font-medium">Share this post:</span>
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-primary transition-colors">Twitter</button>
              <button className="text-gray-600 hover:text-primary transition-colors">Facebook</button>
              <button className="text-gray-600 hover:text-primary transition-colors">LinkedIn</button>
              <button className="text-gray-600 hover:text-primary transition-colors">Copy Link</button>
            </div>
          </div>
        </div>
      </article>
      
      {/* Newsletter */}
      <section className="container max-w-4xl py-12">
        <NewsletterForm />
      </section>
      
      {/* Related Posts */}
      <section className="bg-gray-50 py-16">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts
              .filter(p => p.category === post.category && p.id !== post.id)
              .slice(0, 3)
              .map(relatedPost => (
                <div key={relatedPost.id} className="bg-white rounded-lg shadow-sm p-4">
                  <img 
                    src={relatedPost.imageUrl} 
                    alt={relatedPost.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-bold text-xl mb-2">
                    <Link 
                      to={`/blog/${relatedPost.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPost;
