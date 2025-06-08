"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "Can we use existing projects ?",
    answer:
      "All projects must be built from scratch during the hackathon to ensure fairness. Pre-existing code is not allowed unless it's open-source and available to everyone.",
  },
  {
    question: "Who can participate?",
    answer:
      "CTB Season 2 is open to students, professionals, and anyone with a passion for technology. Participants from all backgrounds and skill levels are welcome!",
  },
  {
    question: 'Do I need a team?',
    answer: 'You can participate solo or in a team of up to 4 members. We encourage team participation as it enhances the collaborative experience, but solo hackers are equally welcome.'
  },
  {
    question: 'Is there any fee?',
    answer: 'No, participation in CTB Season 2 is completely free! However, registration is required as seats are limited. Your personal expanses like travel, accommodation, etc. will not be covered '
  },
  {
    question: "Will travel be covered?",
    answer:
      "We offer travel reimbursements for selected participants from outside Jaipur, up to a certain limit. Details will be shared with registered participants.",
  },
  {
    question: "Can I build hardware projects?",
    answer:
      "Absolutely! We have a dedicated hardware track, and we'll provide access to various hardware components and tools. If you need specific hardware, please mention it during registration.",
  },
  {
    id: "faq6",
    question: "What's the judging criteria?",
    answer:
      "Projects will be judged based on innovation, technical complexity, user experience, practicality, and presentation. Each track may have additional specific criteria.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your laptop, charger, any personal hardware you want to work with, and a valid ID. We'll provide food, beverages, workspace, and a comfortable environment for hacking.",
  },
  {
    question: "Will there be food?",
    answer:
      "Yes! We'll provide meals, snacks, and beverages throughout the 36-hour hackathon. We cater to various dietary preferences, which you can specify during registration.",
  },
  {
    question: 'How much experience do I need?',
    answer: 'All experience levels are welcome! Whether you\'re a beginner or an expert, we have tracks, workshops, and mentors to support your journey. For any help you can reach out us .'
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
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      />

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
