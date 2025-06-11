"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tracks = [
  {
    name: "WEB3",
    id: 1,
    imageUrl: "https://i.pinimg.com/736x/00/4b/22/004b22b901be85ea17153793942ab82a.jpg",
  },
  {
    name: "AI/ML",
    id: 2,
    imageUrl: "https://i.pinimg.com/736x/bf/df/34/bfdf347941e0c16abe5a72fdbdd46075.jpg",
  },
  {
    name: "HEALTHCARE",
    id: 3,
    imageUrl: "https://i.pinimg.com/736x/0f/78/61/0f78610131f53fa273b520e738d1539e.jpg",
  },
  {
    name: "EDTECH",
    id: 4,
    imageUrl: "https://i.pinimg.com/736x/04/1c/5d/041c5db7ddba929d535e1f419904addc.jpg",
  },
  {
    name: "FINTECH",
    id: 5,
    imageUrl: "https://i.pinimg.com/736x/31/3d/b5/313db5299dc1fcd438c1f1439238ef6d.jpg",
  },
  {
    name: "OPEN INNOVATION",
    id: 6,
    imageUrl: "https://i.pinimg.com/736x/cb/f1/0d/cbf10dd3f4200d2853f5f51519554f68.jpg",
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
              onMouseLeave={() => {
                setTrack({ ...track, isOpen: false });
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
