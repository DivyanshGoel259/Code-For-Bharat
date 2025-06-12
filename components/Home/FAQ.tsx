"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "Can we use existing projects?",
    answer:
      "No, all projects must be created from scratch during the hackathon to ensure a fair competition. You’re welcome to use open-source tools or public APIs, but reusing full pre-built projects is not allowed.",
  },
  {
    question: "Who can participate?",
    answer:
      "Code For Bharat Season 2 is open to all students across India. Whether you come from a technical or non-technical background, if you're passionate about solving real-world problems, you’re invited to join!",
  },
  {
    question: "Do I need a team?",
    answer:
      "You can participate individually or in a team of up to 4 members. Teams can include students from different colleges. If you're solo, don’t worry — you'll have chances to connect and collaborate with others.",
  },
  {
    question: "Is there any fee?",
    answer:
      "No, participation is completely free! But make sure to register soon — seats are limited and filling up fast.",
  },
  {
    question: "Will travel be covered?",
    answer:
      "Travel and accommodation will not be provided. Since Code For Bharat is a community-driven initiative without major funding, we’re unable to cover participant travel or lodging expenses.",
  },
  {
    question: "What are the judging criteria?",
    answer:
      "Projects will be judged based on several important factors: innovation, problem relevance, technical implementation, user experience, impact potential, and the strength of your MVP (Minimum Viable Product).",
  },
  {
    question: "What should I bring?",
    answer:
      "For the offline round, please bring your laptop, charger, a valid ID, and any hardware you plan to use. We’ll provide a workspace, internet, and everything else you need to stay focused and comfortable.",
  },
  {
    question: "Can I build hardware projects?",
    answer:
      "Yes, we welcome hardware-based projects! There's a dedicated track for them. Just make sure you bring the necessary components and tools with you, and mention any special requirements during registration.",
  },
  {
    question: "Will there be food?",
    answer:
      "Yes, meals, snacks, and beverages will be provided to all offline participants throughout the hackathon.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "Not at all. Whether you’re a beginner or an experienced builder, there will be workshops, mentors, and a supportive environment to help you learn and grow during this hybrid hackathon.",
  }
];


const FAQ = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % faqs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + faqs.length) % faqs.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % faqs.length);
  };

  return (
    <div
      id="faq"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-[#e9451f] inline-block px-12 py-3 rounded-full">
            <h2 className="text-black font-mono text-4xl tracking-wider font-bold">
              FAQS
            </h2>
          </div>
        </div>

        <div className="relative bg-[#e9451f] p-10 rounded-[2rem] text-center">
          <h3 className="text-black font-mono text-3xl md:text-4xl font-bold mb-8 leading-tight">
            {faqs[currentIndex].question}
          </h3>
          <p className="text-black text-xl md:text-2xl max-w-2xl mx-auto font-mono leading-relaxed">
            {faqs[currentIndex].answer}
          </p>

          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/10 hover:bg-black/20 transition-colors rounded-full p-4 text-black"
            aria-label="Previous question"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/10 hover:bg-black/20 transition-colors rounded-full p-4 text-black"
            aria-label="Next question"
          >
            <ChevronRight size={32} />
          </button>

          <div className="flex justify-center gap-3 mt-12">
            {faqs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-black w-6"
                    : "bg-black/40 hover:bg-black/60"
                }`}
                aria-label={`Go to question ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
