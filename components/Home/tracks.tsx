"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tracks = [
  {
    name: "Devtopus",
    id: 1,
    imageUrl: "https://picsum.photos/seed/devtopus1/300/300",
  },
  {
    name: "Devtopus",
    id: 2,
    imageUrl: "https://picsum.photos/seed/devtopus2/300/300",
  },
  {
    name: "Devtopus",
    id: 3,
    imageUrl: "https://picsum.photos/seed/devtopus3/300/300",
  },
  {
    name: "Devtopus",
    id: 4,
    imageUrl: "https://picsum.photos/seed/devtopus4/300/300",
  },
  {
    name: "Devtopus",
    id: 5,
    imageUrl: "https://picsum.photos/seed/devtopus5/300/300",
  },
  {
    name: "Devtopus",
    id: 6,
    imageUrl: "https://picsum.photos/seed/devtopus5/300/300",
  },
];

export const Tracks = () => {
  const [track, setTrack] = useState({ id: 0, isOpen: false });


  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[url(https://res.cloudinary.com/dlauialhp/image/upload/v1748342442/background_rbg9xv.png)] bg-no-repeat bg-cover bg-center">
      {/* Heading Animation on scroll into view */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-6xl font-Hagrid font-bold text-white"
      >
        Tracks
      </motion.div>

      <div className="mt-10 p-4 flex gap-2">
        {tracks.map((payload, index) => {
          const isActive = track.isOpen && track.id === payload.id;
          return (
            <motion.div
              key={payload.id}
              onMouseEnter={() => {
                setTrack({ id: payload.id, isOpen: true });
              }}
              onMouseLeave={()=>{
                  setTrack({ ...track, isOpen: false })
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.1 * index,
              }}
              className={`transition-all duration-500 ease-in-out ${
                isActive
                  ? "w-[16rem] rounded-[30px]"
                  : "w-[4rem] rounded-[30px]"
              } h-72 bg-[#c04123] relative overflow-hidden`}
            >
              <img
                src={payload.imageUrl}
                alt={payload.name}
                className="w-full h-full"
              />
              <div className="bg-black absolute p-2 bottom-0 left-0 right-0">
                <div className="font-zendots font-bold p-1 rounded-full border-4 border-white text-white bg-transparent flex flex-col justify-center items-center">
                  {isActive ? payload.name : payload.id}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
