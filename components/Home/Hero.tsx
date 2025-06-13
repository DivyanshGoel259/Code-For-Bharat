"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const CodeForBharatLanding = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date (you can modify this)
    const targetDate = new Date('2025-07-01T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const formatTime = (time: number): string => {
    return time.toString().padStart(2, '0');
};

  return (
    <div id='hero' >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
            33% { transform: translateY(-30px) rotate(120deg) scale(1.1); }
            66% { transform: translateY(15px) rotate(240deg) scale(0.9); }
          }
          
          @keyframes floatReverse {
            0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
            33% { transform: translateY(25px) rotate(-120deg) scale(1.15); }
            66% { transform: translateY(-35px) rotate(-240deg) scale(0.85); }
          }
          
          @keyframes pulse {
            0%, 100% { 
              transform: scale(1) rotate(0deg); 
              text-shadow: 0 0 20px #ffeb3b, 0 0 40px #ffeb3b, 0 0 60px #ffeb3b;
            }
            50% { 
              transform: scale(1.3) rotate(180deg); 
              text-shadow: 0 0 30px #ffeb3b, 0 0 60px #ffeb3b, 0 0 90px #ffeb3b;
            }
          }
          
          @keyframes drift {
            0% { 
              transform: translateX(0px) translateY(0px) rotate(0deg) scale(1);
              text-shadow: 0 0 15px #ffeb3b;
            }
            25% { 
              transform: translateX(20px) translateY(-25px) rotate(90deg) scale(1.2);
              text-shadow: 0 0 25px #ffeb3b, 0 0 45px #ffeb3b;
            }
            50% { 
              transform: translateX(-10px) translateY(-20px) rotate(180deg) scale(0.9);
              text-shadow: 0 0 20px #ffeb3b;
            }
            75% { 
              transform: translateX(-25px) translateY(10px) rotate(270deg) scale(1.1);
              text-shadow: 0 0 30px #ffeb3b, 0 0 50px #ffeb3b;
            }
            100% { 
              transform: translateX(0px) translateY(0px) rotate(360deg) scale(1);
              text-shadow: 0 0 15px #ffeb3b;
            }
          }
          
          @keyframes shimmer {
            0% { box-shadow: 0 0 10px rgba(255, 87, 34, 0.5); }
            50% { box-shadow: 0 0 25px rgba(255, 87, 34, 0.8), 0 0 35px rgba(255, 87, 34, 0.4); }
            100% { box-shadow: 0 0 10px rgba(255, 87, 34, 0.5); }
          }
          
          @keyframes morphGrid {
            0%, 100% { 
              transform: rotate(0deg) scale(1);
              filter: hue-rotate(0deg) brightness(1);
            }
            25% { 
              transform: rotate(5deg) scale(1.05);
              filter: hue-rotate(30deg) brightness(1.2);
            }
            50% { 
              transform: rotate(-3deg) scale(0.95);
              filter: hue-rotate(-20deg) brightness(0.9);
            }
            75% { 
              transform: rotate(7deg) scale(1.08);
              filter: hue-rotate(45deg) brightness(1.1);
            }
          }
          
          .animate-float {
            animation: float 5s ease-in-out infinite;
          }
          
          .animate-float-reverse {
            animation: floatReverse 7s ease-in-out infinite;
          }
          
          .animate-pulse-rotate {
            animation: pulse 3s ease-in-out infinite;
          }
          
          .animate-drift {
            animation: drift 8s ease-in-out infinite;
          }
          
          .animate-shimmer {
            animation: shimmer 2s ease-in-out infinite;
          }
          
          .animate-morph {
            animation: morphGrid 6s ease-in-out infinite;
          }
          
          .glow-effect {
            filter: drop-shadow(0 0 10px rgba(255, 87, 34, 0.6));
          }
        `}
      </style>
      {/* Background Pattern Elements */}
      <div className="absolute top-12 left-12 animate-float glow-effect">
        <div className="grid grid-cols-3 gap-1 animate-morph">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className="w-5 h-5 animate-shimmer" 
              style={{ 
                backgroundColor: '#ff5722',
                borderRadius: '2px',
                transition: 'all 0.3s ease'
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-16 right-24 text-8xl font-bold animate-pulse-rotate" style={{ color: '#ffeb3b' }}>
        +
      </div>
      
      <div className="absolute bottom-20 right-12 animate-float-reverse glow-effect">
        <div className="grid grid-cols-3 gap-1 animate-morph">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className="w-5 h-5 animate-shimmer" 
              style={{ 
                backgroundColor: '#ff5722',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                animationDelay: `${i * 0.1}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-40 left-20 text-8xl font-bold animate-drift" style={{ color: '#ffeb3b' }}>
        +
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Main Title */}
        <div className="text-center mb-12">
          <img
            src={'https://res.cloudinary.com/dpam4vkbx/image/upload/v1749363037/CODE_FOR_BHARAT_xonpxa.png'}
            alt='code for bharat'
            className="p-2 w-[57rem] h-[9.5rem] mb-6 leading-tight"
            style={{
              color: '#f5f5dc',
              fontFamily: '"Playfair Display", "Samarkan", "Georgia", serif',
              fontWeight: '400',
              fontStyle: 'normal'
            }}
          />
          <div className="flex justify-center space-x-6 md:space-x-8 text-3xl md:text-4xl font-bold tracking-widest">
            {['S', 'E', 'A', 'S', 'O', 'N', '2'].map((letter, index) => (
              <span
                key={index}
                style={{
                  color: '#ff5722',
                  fontFamily: '"Inter", "Samarkan", sans-serif',
                  fontWeight: '700'
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Hack Begins In */}
        <div className="text-center mb-16">
          <h2 
            className="text-xl md:text-2xl font-bold tracking-widest mb-12"
            style={{ 
              color: '#ffffff', 
              letterSpacing: '0.3em',
              fontFamily: '"Inter", "Helvetica Neue", sans-serif',
              fontWeight: '600'
            }}
          >
            HACK BEGINS IN:
          </h2>
          
          {/* Countdown Timer */}
          <div className="flex justify-center space-x-4 mb-16">
            {[
              { label: 'DAYS', value: formatTime(timeLeft.days) },
              { label: 'HOURS', value: formatTime(timeLeft.hours) },
              { label: 'MINS', value: formatTime(timeLeft.minutes) },
              { label: 'SECS', value: formatTime(timeLeft.seconds) }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="rounded-2xl border px-8 py-12 min-w-[120px] mb-3"
                  style={{ 
                    background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                    borderColor: '#444444',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  <div 
                    className="text-4xl md:text-5xl font-bold"
                    style={{ color: '#ffffff' }}
                  >
                    {item.value}
                  </div>
                </div>
                <div 
                  className="text-sm font-semibold tracking-wider"
                  style={{ color: '#888888' }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-15 md:gap-8">
          <a
            href="https://unstop.com/o/OnPq493?lb=xd2naq5Q&utm_medium=Share&utm_source=shortUrl"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            style={{
              backgroundColor: '#ff5722',
              color: '#000000'
            }}
          >
            <span className="block">REGISTER</span>
            <span className="block">NOW</span>
          </a>
          <a
            href="https://chat.whatsapp.com/FnTFfk7P0GPII8JjndnReR"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            style={{
              backgroundColor: '#ffffff',
              color: '#000000'
            }}
          >
            <span className="block">JOIN OUR</span>
            <span className="block">COMMUNITY</span>
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6" style={{ color: '#ffffff' }} />
          <ChevronDown className="w-6 h-6 -mt-3" style={{ color: '#ffffff' }} />
        </div>
      </div>
    </div>
  );
};

export default CodeForBharatLanding;