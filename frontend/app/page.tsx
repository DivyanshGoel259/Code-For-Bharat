"use client";
import React, { useEffect, useState } from 'react';
import './animations.css';

// Import components

import LoadingScreen from '@/components/Home/LoadingScreen';
import SideNavigation from '@/components/Home/SideNavigation';
import { Tracks } from "@/components/Home/tracks";
import DigitalSwag from "@/components/Home/digitalswag";
import PrizePool from "@/components/Home/prizepool";
import Sponsors from "@/components/Home/sponsors";
import FAQ from "@/components/Home/FAQ";
import { AboutSection } from '@/components/Home/about-section';
import CodeForBharatLanding from '@/components/Home/Hero';
import { Team } from '@/components/Home/Team';
import Timeline from '@/components/Home/event';
import Footer from '@/components/Home/footer';

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
            <CodeForBharatLanding/>
            <AboutSection/>
            <DigitalSwag />          
            <Tracks />
            <Timeline/>
            <PrizePool />
            <Team/>
            <Sponsors />
            <FAQ />
            <Footer/>
          </main>        
        </div>
      )}
    </>
  );
}

export default App;


