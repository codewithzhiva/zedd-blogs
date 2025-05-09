
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Toaster } from '@/components/ui/toaster';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster />
      
      {/* Retro Design Decorations */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-rainbow-gradient z-50"></div>
      <div className="fixed bottom-0 left-0 right-0 h-2 bg-rainbow-gradient z-50"></div>
      
      {/* Animated corner dots */}
      <div className="fixed top-0 left-0 w-4 h-4 bg-retro-neon shadow-neon z-50 animate-pulse"></div>
      <div className="fixed top-0 right-0 w-4 h-4 bg-retro-hotPink z-50 animate-pulse"></div>
      <div className="fixed bottom-0 left-0 w-4 h-4 bg-retro-cyan z-50 animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-4 h-4 bg-retro-neon shadow-neon z-50 animate-pulse"></div>
      
      {/* Optional CRT effect overlay - comment out if too intense */}
      <div className="fixed inset-0 pointer-events-none crt-effect z-[100]"></div>
    </div>
  );
};

export default MainLayout;
