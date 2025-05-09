
import React from 'react';
import { Link } from 'react-router-dom';
import { Disc, BoomBox, Headphones } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-retro-darkPurple text-white border-t-2 border-black">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-display text-2xl tracking-tight text-white retro-outline">ContentAI</span>
              <span className="pixel-text text-sm bg-white text-retro-darkPurple px-2 py-0.5 border border-black">BLOG</span>
            </Link>
            <p className="mt-4 text-retro-cream">
              Your go-to resource for the latest AI tools and strategies for content creators in 2025 and beyond.
            </p>
            <div className="flex space-x-4 mt-4">
              <Disc className="text-retro-cream" />
              <BoomBox className="text-retro-cream" />
              <Headphones className="text-retro-cream" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-retro font-bold mb-4 text-retro-cream">Quick Links</h4>
            <ul className="space-y-2 border-2 border-black bg-white p-3 shadow-retro">
              <li><Link to="/" className="text-retro-darkPurple hover:text-retro-purple font-retro">Home</Link></li>
              <li><Link to="/blog" className="text-retro-darkPurple hover:text-retro-purple font-retro">Blog</Link></li>
              <li><Link to="/tools" className="text-retro-darkPurple hover:text-retro-purple font-retro">AI Tools</Link></li>
              <li><Link to="/about" className="text-retro-darkPurple hover:text-retro-purple font-retro">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-retro font-bold mb-4 text-retro-cream">Resources</h4>
            <ul className="space-y-2 border-2 border-black bg-white p-3 shadow-retro">
              <li><Link to="/prompts" className="text-retro-darkPurple hover:text-retro-purple font-retro">Prompt Library</Link></li>
              <li><Link to="/newsletter" className="text-retro-darkPurple hover:text-retro-purple font-retro">Newsletter</Link></li>
              <li><Link to="/privacy" className="text-retro-darkPurple hover:text-retro-purple font-retro">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-retro-darkPurple hover:text-retro-purple font-retro">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-black mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-retro-cream text-sm pixel-text">
            &copy; {currentYear} ContentAI Blog. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-retro-cream hover:text-white transition-colors font-retro"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-retro-cream hover:text-white transition-colors font-retro"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-retro-cream hover:text-white transition-colors font-retro"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
