"use client";
import React, { useEffect, useState } from 'react';
import './animations.css';

// Import components

import LoadingScreen from '@/components/Home/LoadingScreen';
import SideNavigation from '@/components/Home/SideNavigation';
import { Tracks } from "@/components/Home/tracks";
import DigitalSwag from "@/components/Home/DigitalSwag";
import PrizePool from "@/components/Home/PrizePool";
import Sponsors from "@/components/Home/Sponsors";
import FAQ from "@/components/Home/FAQ";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll function for navigation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestAnchor = target.closest('a');
      
      if (closestAnchor && closestAnchor.hash && closestAnchor.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetId = closestAnchor.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
          
          // Update URL hash without triggering scroll
          window.history.pushState(null, '', closestAnchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div className="min-h-screen bg-slate-50">
          <SideNavigation />
          
          <main>
            <DigitalSwag />
            <Tracks />
            <PrizePool />
            <Sponsors />
            <FAQ />
          </main>        
        </div>
      )}
    </>
  );
}

export default App;


