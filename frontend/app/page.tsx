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
import AnimatedSection from "@/components/Home/animatedsection";

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

    <div className="bg-[url(https://res.cloudinary.com/dlauialhp/image/upload/v1748342442/background_rbg9xv.png)] bg-no-repeat bg-cover bg-center">
      <div className="p-2 ">
        <AboutSection/>

      </div>
      <div className="p-2 mt-4">
        <Team/>
      </div>
      <div className="p-2 mt-4">
        <Tracks/>
      </div>
    </div>
  );
}

export default App;



