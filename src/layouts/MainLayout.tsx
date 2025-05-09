
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
      <div className="fixed top-0 left-0 right-0 h-2 bg-retro-purple z-50"></div>
      <div className="fixed bottom-0 left-0 right-0 h-2 bg-retro-purple z-50"></div>
      
      {/* Optional CRT effect overlay - comment out if too intense */}
      <div className="fixed inset-0 pointer-events-none crt-effect z-[100]"></div>
    </div>
  );
};

export default MainLayout;
