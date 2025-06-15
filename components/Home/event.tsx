"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  date: string;
  month: string;
  title: string;
  side: "left" | "right";
}

const Timeline: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Prevent hydration mismatch flash

  const timelineItems: TimelineItem[] = [
  { date: "20", month: "MAY", title: "REGISTRATIONS\nOPEN", side: "right" },
  { date: "09", month: "JUNE", title: "PROFILE\nSHORTLISTING", side: "left" },
  { date: "10", month: "JULY", title: "REGISTRATIONS\nCLOSE", side: "right" },
  { date: "20", month: "JUNE", title: "PROJECT\nSUBMISSION\nBEGINS", side: "left" },
  { date: "15", month: "JULY", title: "PROJECT\nSUBMISSION\nENDS", side: "right" },
  { date: "18", month: "JULY", title: "SCREENING\nROUND", side: "left" },
  { date: "19", month: "JULY", title: "FINAL\nONLINE ROUND\nDAY 1", side: "right" },
  { date: "20", month: "JULY", title: "FINAL\nONLINE ROUND\nDAY 2", side: "left" },
  { date: "23", month: "JULY", title: "RESULTS\nANNOUNCEMENT", side: "right" },
  { date: "02", month: "AUG", title: "GRAND\nFINALE", side: "left" },
];

  return (
    <motion.div id='timeline'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-8 px-4 flex flex-col items-center"
      style={{ fontFamily: "Hagrid-Text-Extrabold-trial, serif" }} // Apply Hagrid font to all
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white text-4xl md:text-6xl font-bold mb-16 tracking-widest"
        style={{ fontFamily: "Hagrid-Text-Extrabold-trial, serif" }} // Heading in Hagrid
      >
        TIMELINE
      </motion.h1>

      <div className="relative w-full max-w-3xl" style={{ fontFamily: "Zendots, monospace" }}>
        {/* Vertical line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-2 transform -translate-x-1/2"
          style={{ backgroundColor: "#D2401E" }}
        ></div>

        {/* Timeline items */}
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative mb-24 flex items-center"
          >
            {/* Timeline dot */}
            <div
              className="absolute left-1/2 w-8 h-8 border-8 rounded-full transform -translate-x-1/2 z-10"
              style={{
                backgroundColor: "#D2401E",
                borderColor: "#2B2B2B",
              }}
            ></div>

            {/* Content box */}
            <div
              className={`text-white px-8 py-8 rounded-lg font-bold text-lg leading-tight relative ${
                item.side === "left" ? "mr-auto pr-16" : "ml-auto pl-16"
              }`}
              style={{
                backgroundColor: "#D2401E",
                width: "340px",
                marginLeft: item.side === "left" ? "0" : "calc(50% + 40px)",
                marginRight: item.side === "right" ? "0" : "calc(50% + 40px)",
                fontFamily: "Zendots, monospace"
              }}
            >
              {/* Date */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 ${
                  item.side === "left" ? "right-4" : "left-4"
                }`}
              >
                <div
                  className="text-5xl font-bold leading-none"
                  style={{ fontFamily: "Zendots, monospace" }}
                >
                  {item.date}
                </div>
                <div
                  className="text-xl font-normal mt-2"
                  style={{ fontFamily: "Zendots, monospace" }}
                >
                  {item.month}
                </div>
              </div>

              {/* Title */}
              <div
                className={`${item.side === "left" ? "pr-20" : "pl-20"}`}
                style={{ fontFamily: "Zendots, monospace" }}
              >
                {item.title.split("\n").map((line, lineIndex) => (
                  <div key={lineIndex} className="leading-tight">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;
