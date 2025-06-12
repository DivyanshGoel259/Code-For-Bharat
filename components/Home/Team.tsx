"use client";

import { teamCards } from "@/constants";
import { TeamCard } from "../common/team-card";
import { motion } from "framer-motion";

export const Team = () => {
  return (
    <div id="team" className="min-h-screen flex flex-col justify-center items-center px-4 py-10">

      {/* Judges & Mentors Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-Hagrid text-center text-4xl md:text-5xl font-bold text-white"
      >
        JUDGES & MENTORS
      </motion.div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {teamCards.map((payload) => (
          <TeamCard
            key={payload.id}
            imageUrl={payload.imageUrl}
            linkedin_Url={payload.linkedin_Url}
            name={payload.name}
          />
        ))}
      </div>

      {/* Lead Organizers Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-16 font-Hagrid text-center text-4xl md:text-5xl font-bold text-white"
      >
        LEAD ORGANIZERS
      </motion.div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
