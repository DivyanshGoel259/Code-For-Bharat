"use client";
import React from 'react';
import { ArrowUp, Twitter, Instagram, Linkedin, Phone, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-orange-500 to-red-600 text-black mt-20">
      {/* Main Footer Content */}
      <div className="relative z-10 px-8 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          {/* Logo and Organizing Body */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-black flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white transform rotate-45"></div>
            </div>
            <div>
              <h2 className="text-xl font-bold">TECH MASTERS</h2>
              <h3 className="text-lg font-semibold">INDIA</h3>
              <p className="text-sm mt-1">Organizing body</p>
            </div>
          </div>
          {/* Stay Connected */}
          <div className="mt-8 md:mt-0">
            <h2 className="text-3xl font-bold">Stay Connected</h2>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <div>
            <p className="text-sm">@2025 CodeForBharat, all rights reserved.</p>
          </div>
          {/* Scroll to Top Button */}
          <div className="flex items-center justify-center">
            <button className="w-12 h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300" aria-label="Scroll to top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <ArrowUp className="w-6 h-6 text-black" />
            </button>
          </div>
          {/* Social Media Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:scale-110 transition-transform duration-300" aria-label="Twitter">
                <Twitter className="w-8 h-8 text-black fill-current" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-300" aria-label="Instagram">
                <Instagram className="w-8 h-8 text-black" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-300" aria-label="LinkedIn">
                <Linkedin className="w-8 h-8 text-black fill-current" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-300" aria-label="Phone">
                <Phone className="w-8 h-8 text-black" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-300" aria-label="Send">
                <Send className="w-8 h-8 text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pixelated Section using CSS only */}
      <div className="h-20 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <div className="w-full h-full bg-repeat pixelated-bg"></div>
        </div>
      </div>

      <style jsx>{`
        .pixelated-bg {
          background-image: 
            linear-gradient(45deg, #333 25%, transparent 25%),
            linear-gradient(-45deg, #333 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #666 75%),
            linear-gradient(-45deg, transparent 75%, #666 75%);
          background-size: 8px 8px;
          background-position: 0 0, 0 4px, 4px -4px, -4px 0px;
          animation: pixelShift 2s ease-in-out infinite;
        }
        
        @keyframes pixelShift {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;