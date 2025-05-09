
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, CassetteTape } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b-2 bg-white border-black sticky top-0 z-40 shadow-retro">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <CassetteTape className="text-retro-purple" size={32} />
            <div className="flex flex-col">
              <span className="font-display text-lg tracking-tight">ContentAI</span>
              <span className="pixel-text text-xs bg-retro-purple text-white px-2 py-0.5 border border-black">BLOG</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-retro font-bold hover:text-retro-purple">Home</Link>
            <Link to="/blog" className="font-retro font-bold hover:text-retro-purple">Blog</Link>
            <Link to="/tools" className="font-retro font-bold hover:text-retro-purple">AI Tools</Link>
            <Link to="/about" className="font-retro font-bold hover:text-retro-purple">About</Link>
          </nav>
          
          {/* Search & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button 
              className="p-1 text-retro-darkPurple hover:text-retro-purple transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              className="md:hidden p-1 text-retro-darkPurple hover:text-retro-purple transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/subscribe" className="hidden md:block btn btn-primary">
              Subscribe
            </Link>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t-2 border-black">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="px-2 py-1 font-retro font-bold hover:bg-retro-cream"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="px-2 py-1 font-retro font-bold hover:bg-retro-cream"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/tools" 
                className="px-2 py-1 font-retro font-bold hover:bg-retro-cream"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Tools
              </Link>
              <Link 
                to="/about" 
                className="px-2 py-1 font-retro font-bold hover:bg-retro-cream"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/subscribe" 
                className="px-2 py-1 bg-retro-purple text-white border-2 border-black shadow-retro font-retro"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscribe
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
