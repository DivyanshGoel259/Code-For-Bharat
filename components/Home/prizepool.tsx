"use client";

import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import AnimatedSection from "./animatedsection";

const PrizePool: React.FC = () => {
  return (
    <section
      id="prizes"
      className="min-h-screen flex items-center justify-center px-4 py-16 "
    >
      <div className="container mx-auto text-center">
        {/* Heading */}
        <AnimatedSection variant="fade-up" className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wide">
            PRIZE POOL
          </h2>
        </AnimatedSection>

        {/* Prize Amount Card */}
        <AnimatedSection variant="zoom-in" delay={200} className="mx-auto">
          <div
            className="rounded-3xl px-10 py-14 sm:py-16 shadow-2xl hover:scale-105 transition-transform duration-300 inline-block"
            style={{
              backgroundColor: "#e9451f",
              boxShadow: "0 15px 30px rgba(233, 69, 31, 0.25)",
            }}
          >
            <div className="text-6xl sm:text-7xl md:text-8xl font-extrabold font-mono text-white flex justify-center items-end">
              <span className="text-4xl md:text-5xl align-top">$</span>
              <AnimatedCounter end={2000} />
              <span className="text-4xl md:text-5xl">+</span>
            </div>
          </div>

          <p className="mt-6 text-xl sm:text-2xl text-gray-300 font-medium">
            Total Prize Pool
          </p>
        </AnimatedSection>

        {/* Register Button */}
        <AnimatedSection variant="fade-up" delay={400} className="mt-12">
          <a
            href="https://unstop.com/hackathons/code-for-bharat-season-2-hackathon-tech-masters-india-1480301"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 text-lg sm:text-xl text-white font-semibold rounded-full transition-transform duration-300 hover:scale-105"
            style={{
              background: "#e9451f",
              boxShadow: "0 6px 25px rgba(233, 69, 31, 0.4)",
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
