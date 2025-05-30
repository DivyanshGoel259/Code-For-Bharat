import React, { useEffect, useState } from 'react';
import './animations.css';

// Import components

import LoadingScreen from './components/Home/LoadingScreen';
import SideNavigation from './components/Home/SideNavigation';
import { AboutSection } from "@/components/Home/about-section";
import { Team } from "@/components/Home/Team";
import { Tracks } from "@/components/Home/tracks";
import Image from "next/image";
import DigitalSwag from "@/components/Home/digitalswag";
import PrizePool from "@/components/Home/prizepool";
import Sponsors from "@/components/Home/sponsors";
import FAQ from "@/components/Home/faqs";

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


            <AboutSection></AboutSection>
            <DigitalSwag/>
            <PrizePool/>
            <Sponsors/>
            <FAQ/>
          </main>
        </div>
      )}
    </>
  );
}

export default App;



