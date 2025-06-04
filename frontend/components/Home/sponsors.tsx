"use client"

import React from 'react';
import AnimatedSection from './animatedsection';

interface SponsorCategory {
  id: string;
  name: string;
  sponsors: {
    id: string;
    name: string;
    image: string;
  }[];
}

const sponsorCategories: SponsorCategory[] = [
  {
    id: 'organizing',
    name: 'Organising Body',
    sponsors: [
      {
        id: 'org1',
        name: 'Organization 1',
        image: 'https://placehold.co/400x200/333/FF4500?text=Organizer+1'
      },
      {
        id: 'org2',
        name: 'Organization 2',
        image: 'https://placehold.co/400x200/333/FF4500?text=Organizer+2'
      }
    ]
  },
  {
    id: 'powered',
    name: 'Powered By',
    sponsors: [
      {
        id: 'power1',
        name: 'Power Sponsor',
        image: 'https://placehold.co/400x200/333/FF4500?text=Powered+By'
      }
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum',
    sponsors: [
      {
        id: 'plat1',
        name: 'Platinum Sponsor 1',
        image: 'https://placehold.co/400x200/333/FF4500?text=Platinum+1'
      },
      {
        id: 'plat2',
        name: 'Platinum Sponsor 2',
        image: 'https://placehold.co/400x200/333/FF4500?text=Platinum+2'
      },
      {
        id: 'plat3',
        name: 'Platinum Sponsor 3',
        image: 'https://placehold.co/400x200/333/FF4500?text=Platinum+3'
      }
    ]
  }
];

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="min-h-screen relative bg-slate-900 flex items-center justify-center overflow-hidden py-20">
      {/* Background pattern */}
      <div
  className="absolute inset-0 bg-cover bg-center opacity-100"
  style={{
      backgroundImage: "url('/background.png')"  }}
></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection variant="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
            SPONSORS
          </h2>
        </AnimatedSection>

        <div className="space-y-16">
          {/* Organising Body */}
          <AnimatedSection variant="fade-up" delay={200}>
            <h3 className="text-2xl text-orange-500 text-center mb-8 font-mono">
              {sponsorCategories[0].name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {sponsorCategories[0].sponsors.map(sponsor => (
<div
  key={sponsor.id}
  className="aspect-[3/2] border-2 border-orange-500/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 hover:translate-y-[-5px]"
>
  <img
    src={sponsor.image}
    alt={sponsor.name}
    className="w-full h-full object-cover"
  />
</div>
              ))}
            </div>
          </AnimatedSection>

          {/* Powered By */}
          <AnimatedSection variant="fade-up" delay={300}>
            <h3 className="text-2xl text-orange-500 text-center mb-8 font-mono">
              {sponsorCategories[1].name}
            </h3>
            <div className="max-w-2xl mx-auto">
              <div
                className="aspect-[2/1] border-2 border-orange-500/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <img
                  src={sponsorCategories[1].sponsors[0].image}
                  alt={sponsorCategories[1].sponsors[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Platinum */}
          <AnimatedSection variant="fade-up" delay={400}>
            <h3 className="text-2xl text-orange-500 text-center mb-8 font-mono">
              {sponsorCategories[2].name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {sponsorCategories[2].sponsors.slice(0, 2).map(sponsor => (
                <div
                  key={sponsor.id}
                  className="aspect-[2/1] border-2 border-orange-500/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="max-w-2xl mx-auto mt-8">
              <div
                className="aspect-[2/1] border-2 border-orange-500/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <img
                  src={sponsorCategories[2].sponsors[2].image}
                  alt={sponsorCategories[2].sponsors[2].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Sponsor Us Button */}
          <AnimatedSection variant="fade-up" delay={500} className="text-center">
            <a
              href="mailto:sponsors@example.com"
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-orange-500 text-white font-mono rounded-full transition-all duration-300 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20"
            >
              Sponsor Us
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
