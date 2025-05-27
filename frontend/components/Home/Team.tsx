"use client"

import { teamCards } from "@/constants";
import { TeamCard } from "../common/team-card";
import { motion } from "framer-motion";

export const Team = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-800">
      <div>
        {/* Judges & Mentors Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="font-playfair text-center text-4xl font-bold text-white"
>
          Judges & Mentors
        </motion.div>

        <div className="p-2 mt-6 flex gap-5">
          {teamCards.map((payload) => (
            <TeamCard
              key={payload.id}
              imageUrl={payload.imageUrl}
              information={payload.information}
              name={payload.name}
            />
          ))}
        </div>
      </div>

      <div>
        {/* Lead Organizers Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="mt-6 font-playfair text-center text-4xl font-bold text-white"
>
          Lead Organizers
        </motion.div>

        <div className="p-2 mt-6 flex gap-5">
          {teamCards.map((payload) => (
            <TeamCard
              key={payload.id}
              imageUrl={payload.imageUrl}
              information={payload.information}
              name={payload.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
