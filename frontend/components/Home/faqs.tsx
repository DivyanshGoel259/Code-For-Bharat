"use client"

import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: "Can we use a project we've already started or must it be built from scratch?",
    answer:
      "All projects must be built from scratch during the hackathon to ensure fairness. Pre-existing code is not allowed unless it’s open-source and available to everyone.",
  },
  {
    question: 'Who can participate?',
    answer: 'CTB Season 2 is open to students, professionals, and anyone with a passion for technology. Participants from all backgrounds and skill levels are welcome!'
  },
  {
    question: 'Do I need a team?',
    answer: 'You can participate solo or in a team of up to 4 members. We encourage team participation as it enhances the collaborative experience, but solo hackers are equally welcome. We\'ll also have team formation activities to help you find teammates!'
  },
  {
    question: 'Is there any fee?',
    answer: 'No, participation in CTB Season 2 is completely free! However, registration is required as seats are limited.'
  },
  {
    question: 'Will travel be covered?',
    answer: 'We offer travel reimbursements for selected participants from outside Jaipur, up to a certain limit. Details will be shared with registered participants.'
  },
  {
    question: 'Can I build hardware projects?',
    answer: 'Absolutely! We have a dedicated hardware track, and we\'ll provide access to various hardware components and tools. If you need specific hardware, please mention it during registration.'
  },
  {
    id: 'faq6',
    question: 'What\'s the judging criteria?',
    answer: 'Projects will be judged based on innovation, technical complexity, user experience, practicality, and presentation. Each track may have additional specific criteria.'
  },
  {
    question: 'What should I bring?',
    answer: 'Bring your laptop, charger, any personal hardware you want to work with, and a valid ID. We\'ll provide food, beverages, workspace, and a comfortable environment for hacking.'
  },
  {
    question: 'Will there be food?',
    answer: 'Yes! We\'ll provide meals, snacks, and beverages throughout the 36-hour hackathon. We cater to various dietary preferences, which you can specify during registration.'
  },
  {
    question: 'How much experience do I need?',
    answer: 'All experience levels are welcome! Whether you\'re a beginner or an expert, we have tracks, workshops, and mentors to support your journey.'
  },
  {
    question: 'Can I start working on my project before the event?',
    answer: 'No, all projects must be built from scratch during the hackathon. You can brainstorm ideas and form teams beforehand, but coding or building must begin only at the start of the event.'
  }
  // Add 9 more questions and answers here...
];

const FAQ = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % faqs.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + faqs.length) % faqs.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % faqs.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="bg-[#e9451f] px-6 py-2 rounded-full text-black font-bold text-xl mb-8">FAQs</div>
      <div className="relative bg-[#e9451f] p-8 rounded-2xl w-full max-w-3xl text-center">
        <h2 className="text-black text-xl font-bold mb-4">{faqs[currentIndex].question}</h2>
        <p className="text-black max-w-2xl mx-auto">{faqs[currentIndex].answer}</p>

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black hover:scale-110 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black hover:scale-110 transition"
        >
          <ChevronRight size={24} />
        </button>

        <div className="flex justify-center mt-6 space-x-2">
          {faqs.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 w-2 rounded-full ${
                idx === currentIndex ? 'bg-black' : 'bg-white'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
