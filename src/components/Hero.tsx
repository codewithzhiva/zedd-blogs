
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Elevate Your Content Creation with AI Tools
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Discover the best AI-powered tools to create, optimize, and scale your content in 2025.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/blog/10-best-ai-tools-for-content-creators" 
              className="btn bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-bold"
            >
              Read Latest Post
            </Link>
            <Link 
              to="/subscribe" 
              className="btn bg-blue-800 text-white hover:bg-blue-900 px-8 py-3 rounded-md font-bold"
            >
              Get AI Prompt Pack
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,146.86,88.55,214.19,74.34,284.41,59.44,348.71,70.67,410.5,65.49,469,60.58,525.85,45.94,575.5,32.88,630.94,18.34,688.57,14,743.84,17.16a566.09,566.09,0,0,1,107.44,17.6Z" 
            className="fill-white opacity-10"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
