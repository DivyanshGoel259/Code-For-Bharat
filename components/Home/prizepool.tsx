"use client";

import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import AnimatedSection from "./animatedsection";

const PrizePool: React.FC = () => {
  return (
    <section
      id="prizes"
      className="min-h-screen flex items-center justify-center px-2 sm:px-4 py-10 sm:py-16"
    >
      <div className="container mx-auto text-center">
        {/* Heading */}
        <AnimatedSection variant="fade-up" className="mb-10 sm:mb-20 mt-[-1rem] sm:mt-[-2rem]">
          <h2
            className="text-2xl sm:text-5xl lg:text-8xl font-extrabold text-white tracking-wide"
            style={{ fontFamily: "Hagrid-Text-Extrabold-trial, serif" }}
          >
            PRIZE POOL
          </h2>
        </AnimatedSection>

        {/* Prize Amount Card */}
        <AnimatedSection variant="zoom-in" delay={200} className="mx-auto">
          <div
            className="rounded-3xl px-6 py-10 sm:px-10 sm:py-14 shadow-2xl hover:scale-105 transition-transform duration-300 inline-block w-full max-w-xs sm:max-w-none"
            style={{
              backgroundColor: "#e9451f",
              boxShadow: "0 15px 30px rgba(233, 69, 31, 0.25)",
            }}
          >
            <div
              className="text-4xl sm:text-7xl md:text-8xl font-extrabold text-white flex justify-center items-end gap-2"
              style={{ fontFamily: "Zendots, monospace" }}
            >
              <span className="inline-block">$</span>
              <span className="inline-block">
                <AnimatedCounter end={2000} duration={2000} />
              </span>
              <span className="inline-block">+</span>
            </div>
          </div>

          <p
            className="mt-4 sm:mt-6 text-lg sm:text-2xl text-gray-300 font-medium"
            style={{ fontFamily: "Zendots, monospace" }}
          >
            Total Prize Pool
          </p>
        </AnimatedSection>

        {/* Register Button */}
        <AnimatedSection variant="fade-up" delay={400} className="mt-8 sm:mt-12">
          <a
            href="https://unstop.com/hackathons/code-for-bharat-season-2-hackathon-tech-masters-india-1480301"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-xl text-white font-semibold rounded-full transition-transform duration-300 hover:scale-105"
            style={{
              background: "#e9451f",
              boxShadow: "0 6px 25px rgba(233, 69, 31, 0.4)",
            }}
          >
            <span style={{ fontFamily: "Zendots, monospace", color: "#000000" }}>
              Register Now
            </span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PrizePool;
