"use client";

import { mentorsAndJudges, teamCards } from "@/constants";
import { TeamCard } from "../common/team-card";
import { motion } from "framer-motion";
import { Marquee } from "../magicui/marquee";

export const Team = () => {
  return (
    <div id="team" className="min-h-screen flex flex-col justify-center items-center px-4 py-4">
      {/* Mentors & Judges Section as Marquee Carousel */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-20"
        style={{ fontFamily: "Hagrid-Text-Extrabold-trial, serif" }}
      >
        MENTORS & JUDGES
      </motion.div>

      <div className="w-full max-w-7xl">
        <Marquee className="[--duration:18s]" pauseOnHover>
          {mentorsAndJudges?.map((payload) => (
            <div key={`judge-mentor-${payload.id}`} className="mx-4">
              <TeamCard
                imageUrl={payload.imageUrl}
                linkedin_Url={payload.url}
                name={payload.name}
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Lead Organizers Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-10 text-center text-3xl sm:text-4xl lg:text-6xl  font-bold text-white mb-20"
        style={{ fontFamily: "Hagrid-Text-Extrabold-trial, serif" }}
      >
        LEAD ORGANIZERS
      </motion.div>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {teamCards.map((payload) => (
          <TeamCard
            key={`organizer-${payload.id}`}
            imageUrl={payload.imageUrl}
            linkedin_Url={payload.linkedin_Url}
            name={payload.name}
          />
        ))}
      </div>
    </div>
  );
};
