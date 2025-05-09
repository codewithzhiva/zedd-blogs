
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-40">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-bold tracking-tight">ContentAI</span>
            <span className="text-sm bg-primary text-white px-2 py-0.5 rounded">BLOG</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-primary">Home</Link>
            <Link to="/blog" className="font-medium hover:text-primary">Blog</Link>
            <Link to="/tools" className="font-medium hover:text-primary">AI Tools</Link>
            <Link to="/about" className="font-medium hover:text-primary">About</Link>
          </nav>
          
          {/* Search & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button 
              className="p-1 text-gray-500 hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              className="md:hidden p-1 text-gray-500 hover:text-primary transition-colors"
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
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="px-2 py-1 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="px-2 py-1 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/tools" 
                className="px-2 py-1 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Tools
              </Link>
              <Link 
                to="/about" 
                className="px-2 py-1 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/subscribe" 
                className="px-2 py-1 bg-primary text-white rounded-md"
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
