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
        image: '/tmi.png'
      },
    ]
  },
  {
    id: 'powered',
    name: 'Powered By',
    sponsors: [
      {
        id: 'power1',
        name: 'Power Sponsor',
        image: 'https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/blue/Unstop-Logo-Blue-Large.jpg'
      }
    ]
  },
  {
    id: 'Sponsors',
    name: 'Sponsors',
    sponsors: [
      { id: 'plat1', name: 'GeeksforGeeks', image: '/sponsorsLogo/GeeksforGeeks_idFKvyQOZ__1.png' },
      { id: 'plat2', name: 'Physics Wallah', image: '/sponsorsLogo/Physics Wallah Logo PNG Vector (SVG) Free Download.jpeg' },
      { id: 'plat3', name: 'Unstop', image: '/sponsorsLogo/Unstop-Logo-White-Medium.png' },
      { id: 'plat4', name: 'AoPS', image: '/sponsorsLogo/AoPS_Main_Logo (1).png' },
      { id: 'plat5', name: 'Balsamiq', image: '/sponsorsLogo/balsamiq_icon_circle.png' },
      { id: 'plat6', name: 'Codecrafters', image: '/sponsorsLogo/codecraftersio_logo.jpeg' },
      { id: 'plat7', name: 'DoraHacks', image: '/sponsorsLogo/dorahacks_logo.jpeg' },
      { id: 'plat8', name: 'DroomDroom Black', image: '/sponsorsLogo/DroomDroom_Black.png' },
      { id: 'plat9', name: 'DroomDroom White', image: '/sponsorsLogo/DroomDroom_White.png' },
      { id: 'plat10', name: 'g30', image: '/sponsorsLogo/g30.png' },
      { id: 'plat11', name: 'GMC', image: '/sponsorsLogo/GMC LogoS.png' },
      { id: 'plat12', name: 'JetBrains', image: '/sponsorsLogo/jetbrains-mono-white.png' },
      { id: 'plat13', name: 'phtUwOA6', image: '/sponsorsLogo/phtUwOA6_400x400-removebg-preview.png' },
      { id: 'plat14', name: 'Flatlogic', image: '/sponsorsLogo/png-transparent-flatlogic-stacked-logo-tech-companies-thumbnail-removebg-preview.png' },
      { id: 'plat15', name: 'True', image: '/sponsorsLogo/true.png' }
    ]
  },
  {
    id: 'Media Partner',
    name: 'Media Partner',
    sponsors: [
      {
        id: 'Media Partner',
        name: 'Media Partner',
        image: '/DroomDroom_White.png' 
      }
    ]
  },
];

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="min-h-screen flex items-center justify-center overflow-hidden py-20">


      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection variant="fade-up" className="text-center mb-16">
          <h2
            className="text-3xl sm:text-5xl lg:text-8xl font-bold text-white tracking-wider"
            style={{ fontFamily: "Hagrid-Text-Extrabold-trial, serif" }}
          >
            SPONSORS
          </h2>
        </AnimatedSection>

        <div className="space-y-12">
          {/* Organising Body */}
          <AnimatedSection variant="fade-up" delay={200}>
            <h3
              className="text-lg sm:text-2xl lg:text-4xl text-[#e9451f] text-center mb-6 font-bold tracking-wide"
              style={{ fontFamily: "Zendots, monospace" }}
            >
              {sponsorCategories[0].name}
            </h3>
            <div className="flex justify-center">
              <div
                key={sponsorCategories[0].sponsors[0].id}
                className="aspect-[5/3] w-full max-w-xs border-2 border-orange-500/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 hover:translate-y-[-5px]"
              >
                <img
                  src={sponsorCategories[0].sponsors[0].image}
                  alt={sponsorCategories[0].sponsors[0].name}
                  className="w-full h-full object-contain bg-[#333333]"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Powered By */}
          <AnimatedSection variant="fade-up" delay={300}>
            <h3
              className="text-lg sm:text-2xl lg:text-4xl text-[#e9451f] text-center mb-6 font-bold tracking-wide"
              style={{ fontFamily: "Zendots, monospace" }}
            >
              {sponsorCategories[1].name}
            </h3>
            <div className="flex justify-center">
              <div
                className="aspect-[5/3] w-full max-w-xs border-2 border-orange-500/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <img
                  src={sponsorCategories[1].sponsors[0].image}
                  alt={sponsorCategories[1].sponsors[0].name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Platinum & All Sponsors */}
          <AnimatedSection variant="fade-up" delay={400}>
            <h3
              className="text-lg sm:text-2xl lg:text-4xl text-[#e9451f] text-center mb-6 font-bold tracking-wide"
              style={{ fontFamily: "Zendots, monospace" }}
            >
              {sponsorCategories[2].name}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {sponsorCategories[2].sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="aspect-[2/1] flex items-center justify-center border-2 border-orange-500/50 rounded-lg overflow-hidden transition-all duration-300 bg-white/5 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Media Partner Section */}
          <AnimatedSection variant="fade-up" delay={450}>
            <h3
              className="text-lg sm:text-2xl lg:text-4xl text-[#e9451f] text-center mb-6 font-bold tracking-wide"
              style={{ fontFamily: "Zendots, monospace" }}
            >
              Media Partner
            </h3>
            <div className="flex justify-center">
              <div
                className="aspect-[3/1] w-full max-w-md border-2 border-orange-500/50 rounded-lg overflow-hidden transition-all duration-300 bg-white/5 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 flex items-center justify-center"
                style={{ minHeight: "100px" }}
              >
                <img
                  src="/sponsorsLogo/DroomDroom_Black.png"
                  alt="DroomDroom Media Partner"
                  className="w-[80%] h-auto object-contain p-4"
                  style={{ maxHeight: "90px" }}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Media Partner */}
          <AnimatedSection variant="fade-up" delay={450}>
            <h3
              className="text-lg sm:text-2xl lg:text-4xl text-[#e9451f] text-center mb-6 font-bold tracking-wide"
              style={{ fontFamily: "Zendots, monospace" }}
            >
              {sponsorCategories[3].name}
            </h3>
            <div className="flex justify-center">
              <div
                className="aspect-[5/3] w-full max-w-xs border-2 border-orange-500/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <img
                  src={sponsorCategories[3].sponsors[0].image}
                  alt={sponsorCategories[3].sponsors[0].name}
                  className="w-full h-full object-contain bg-[#333333]"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Sponsor Us Button */}
          <AnimatedSection variant="fade-up" delay={500} className="text-center">
            <a
              href="https://forms.gle/pFt1NqdV1wN1Yo759"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-[#e9451f] border-2 border-[#e9451f] text-black rounded-full text-xl font-bold transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
              style={{ fontFamily: "Zendots, monospace" }}
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
