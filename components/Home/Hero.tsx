import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const targetDate = new Date("2025-07-10T23:59:59Z");

function getTimeLeft() {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  return {
    days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
    seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
  };
}

function formatTime(num: number) {
  return num.toString().padStart(2, "0");
}

export const CodeForBharatLanding = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-2 sm:px-4">
      {/* SVG Decorative Elements */}
      {/* Top Left SVG */}
      <div className="hidden md:block absolute top-4 left-4 glow-effect">
        <svg
          width="70"
          height="42"
          className="sm:w-[140px] sm:h-[84px]"
          viewBox="0 0 140 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="mask0_22_274" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="140" height="84">
            <rect width="140" height="84" fill="white" />
          </mask>
          <g mask="url(#mask0_22_274)">
            <path d="M28 42H0V0H28V42ZM84 0H56V42H84V0ZM140 0H112V42H140V0ZM56 42H28V84H56V42ZM112 42H84V84H112V42Z" fill="#E94B27" />
          </g>
        </svg>
      </div>
      {/* Top Right SVG */}
      <div className="hidden md:block absolute top-10 right-10 glow-effect">
        <svg width="74" height="77" viewBox="0 0 74 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_22_824"  maskUnits="userSpaceOnUse" x="0" y="0" width="68" height="68">
<path d="M0 0H73.7708V76.2186H0V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_22_824)">
<path d="M44.5785 0.00878906V30.548H73.7708V45.3428H44.5785V76.1712H29.1923V45.3428H0V30.548H29.1923V0.00878906H44.5785Z" fill="#F1FB84"/>
</g>
</svg>

      </div>
      {/* Bottom Left SVG */}
      <div className="hidden md:block absolute bottom-10 left-10 glow-effect">
        <svg width="74" height="77" viewBox="0 0 74 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_22_824"  maskUnits="userSpaceOnUse" x="0" y="0" width="70" height="70">
<path d="M0 0H73.7708V76.2186H0V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_22_824)">
<path d="M44.5785 0.00878906V30.548H73.7708V45.3428H44.5785V76.1712H29.1923V45.3428H0V30.548H29.1923V0.00878906H44.5785Z" fill="#F1FB84"/>
</g>
</svg>
      </div>
      {/* Bottom Right SVG */}
      <div className="hidden md:block absolute bottom-10 right-10 glow-effect">
        <svg
          width="70"
          height="42"
          className="sm:w-[140px] sm:h-[84px]"
          viewBox="0 0 140 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="mask0_22_274" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="140" height="84">
            <rect width="140" height="84" fill="white" />
          </mask>
          <g mask="url(#mask0_22_274)">
            <path d="M28 42H0V0H28V42ZM84 0H56V42H84V0ZM140 0H112V42H140V0ZM56 42H28V84H56V42ZM112 42H84V84H112V42Z" fill="#E94B27" />
          </g>
        </svg>
      </div>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-2 sm:px-4">
        {/* Main Title */}
        <div className="text-center mb-8 sm:mb-12">
          <img
            src={'https://res.cloudinary.com/dpam4vkbx/image/upload/v1749363037/CODE_FOR_BHARAT_xonpxa.png'}
            alt='code for bharat'
            className="p-2 w-full max-w-xs sm:max-w-3xl md:max-w-4xl lg:w-[57rem] lg:h-[9.5rem] mb-4 sm:mb-6 leading-tight"
          />
          <div className="flex justify-center space-x-2 sm:space-x-6 md:space-x-8 text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest">
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
        <div className="text-center mb-10 sm:mb-16">
          <h2
            className="text-base sm:text-xl md:text-2xl font-bold tracking-widest mb-6 sm:mb-12"
            style={{
              color: '#ffffff',
              letterSpacing: '0.3em',
              fontFamily: 'Zendots, monospace',
              fontWeight: '600'
            }}
          >
            REGISTRATION ENDS IN:
          </h2>

          {/* Countdown Timer */}
          <div className="flex justify-center items-center space-x-0 mb-8 sm:mb-16">
            {[
              { label: 'DAYS', value: formatTime(timeLeft.days) },
              { label: 'HOURS', value: formatTime(timeLeft.hours) },
              { label: 'MINS', value: formatTime(timeLeft.minutes) },
              { label: 'SECS', value: formatTime(timeLeft.seconds) }
            ].map((item, index, arr) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center">
                  <div
                    className="rounded-2xl border mb-2 sm:mb-3
                      w-16 h-16 px-2 py-3
                      sm:w-[90px] sm:h-[100px] sm:px-6 sm:py-6
                      md:w-[90px] md:h-[100px] md:px-6 md:py-6
                      lg:w-[90px] lg:h-[100px] lg:px-6 lg:py-6
                      flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                      borderColor: '#444444',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
                    }}
                  >
                    <div
                      className="text-lg sm:text-3xl md:text-4xl font-bold"
                      style={{ color: '#ffffff', fontFamily: 'Zendots, monospace' }}
                    >
                      {item.value}
                    </div>
                  </div>
                  <div
                    className="text-xs sm:text-sm font-semibold tracking-wider"
                    style={{ color: '#888888', fontFamily: 'Zendots, monospace' }}
                  >
                    {item.label}
                  </div>
                </div>
                {/* Add colon between boxes except after the last one */}
                {index < arr.length - 1 && (
                  <span
                    className="text-xl sm:text-5xl md:text-6xl font-bold mx-1 sm:mx-2 mb-6 sm:mb-10"
                    style={{ color: '#ff5722', fontFamily: 'Zendots, monospace', userSelect: 'none' }}
                  >
                    :
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-[-1.5rem] sm:mt-[-3.5rem] mb-8 sm:mb-10 w-full max-w-xs sm:max-w-none mx-auto">
          <a
            href="https://unstop.com/o/OnPq493?lb=xd2naq5Q&utm_medium=Share&utm_source=shortUrl"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold w-full sm:w-56 px-0 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg flex flex-col items-center justify-center"
            style={{
              backgroundColor: '#ff5722',
              color: '#000000',
              fontFamily: 'Zendots, monospace'
            }}
          >
            <span className="block w-full text-center">REGISTER</span>
            <span className="block w-full text-center">NOW</span>
          </a>
          <a
            href="https://chat.whatsapp.com/FnTFfk7P0GPII8JjndnReR"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold w-full sm:w-56 px-0 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg flex flex-col items-center justify-center"
            style={{
              backgroundColor: '#ffffff',
              color: '#000000',
              fontFamily: 'Zendots, monospace'
            }}
          >
            <span className="block w-full text-center">JOIN OUR</span>
            <span className="block w-full text-center">COMMUNITY</span>
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6" style={{ color: '#ffffff' }} />
          <ChevronDown className="w-6 h-6 -mt-3" style={{ color: '#ffffff' }} />
        </div>
      </div>
    </div>
  );
};

