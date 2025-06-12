"use client";

import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import AnimatedSection from "./animatedsection";

const PrizePool: React.FC = () => {
  return (
    <section
      id="prizes"
      className="min-h-screen  relative bg-slate-900 flex items-center justify-center overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection variant="fade-up" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
            PRIZE POOL
          </h2>
        </AnimatedSection>

        <AnimatedSection
          variant="zoom-in"
          delay={200}
          className="max-w-2xl mx-auto"
        >
          <div
            className="rounded-2xl py-12 text-center shadow-2xl"
            style={{
              backgroundColor: "#e9451f",
              boxShadow: "0 10px 25px 0 #e9451f33", // 20% opacity
            }}
          >
            <div className="text-5xl md:text-7xl font-bold font-mono text-white flex items-center justify-center">
              <span className="text-4xl md:text-6xl align-top">$</span>
              <AnimatedCounter end={2000} />
              <span className="text-4xl md:text-6xl">+</span>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-xl md:text-2xl text-gray-300">
              Total Prize Pool
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection
          variant="fade-up"
          delay={400}
          className="mt-16 text-center"
        >
          <a
            href="https://unstop.com/hackathons/code-for-bharat-season-2-hackathon-tech-masters-india-1480301"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              background: "#e9451f",
              boxShadow: "0 4px 20px 0 #e9451f40", // 25% opacity
            }}
          >
            Register Now
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PrizePool;
