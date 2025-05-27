import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import AnimatedSection from './animatedsection';

const PrizePool: React.FC = () => {
  return (
    <section id="prizes" className="min-h-screen relative bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-slate-800"
            style={{
              transform: `scale(${1 + i * 0.15})`,
              opacity: 1 - i * 0.1
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection variant="fade-up" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
            PRIZE POOL
          </h2>
        </AnimatedSection>

        <AnimatedSection variant="zoom-in" delay={200} className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 shadow-2xl shadow-orange-500/20 text-center">
            <div className="text-4xl md:text-6xl font-bold font-mono text-white flex items-center justify-center">
              <span className="text-3xl md:text-5xl align-top">$</span>
              <AnimatedCounter end={2000} />
              <span className="text-3xl md:text-5xl">+</span>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-xl text-gray-300">Total Prize Pool</p>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fade-up" delay={400} className="mt-16 text-center">
          <a 
            href="#register" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105"
          >
            Register Now
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PrizePool;