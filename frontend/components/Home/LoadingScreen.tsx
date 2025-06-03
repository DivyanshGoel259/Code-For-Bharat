"use client"

import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showDots, setShowDots] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start the animation sequence
    const sequence = async () => {
      // Show first line with typing effect
      setShowFirstLine(true);
      
      // Wait before showing second line
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSecondLine(true);
      
      // Wait before showing blinking dots
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowDots(true);
      
      // Wait for dots animation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Fade out and complete
      setFadeOut(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      onLoadingComplete();
    };

    sequence();
  }, [onLoadingComplete]);

  return (
    <div 
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        transition-opacity duration-1000
        ${fadeOut ? 'opacity-0' : 'opacity-100'}
      `}
      style={{
        backgroundImage: 'url(/src/components/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="font-mono text-xl md:text-2xl text-white space-y-6">
        <div className={`
          transition-all duration-1000
          ${showFirstLine ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          <span className="text-green-400">&gt;</span>echo "They thought it was over."
        </div>
        
        <div className={`
          transition-all duration-1000
          ${showSecondLine ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          <span className="text-green-400">&gt;</span>initializing_v2.0_core
          <span className={`
            ${showDots ? 'animate-[blink_1s_ease-in-out_3]' : 'opacity-0'}
          `}>...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
