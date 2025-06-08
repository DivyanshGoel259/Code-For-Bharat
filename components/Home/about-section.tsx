"use client";

import { IconCard } from "../common/icon-card";
import { Marquee } from "../magicui/marquee";
import {
  BuildingIcon,
  ClipBoardIcon,
  FolderIcon,
  LocationIcon,
} from "@/assets/icon";
import Image from "next/image";
import { items } from "@/constants";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const firstRow = items.slice(0, items.length / 2);
  const secondRow = items.slice(items.length / 2);

  return (
    <div id='about' className="font-Hagrid overflow-hidden bg-[url(https://res.cloudinary.com/dlauialhp/image/upload/v1748342442/background_rbg9xv.png)] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="tracking-widest font-bold text-4xl text-center text-white p-3 mt-4"
      >
        ABOUT US
      </motion.div>

      {/* Subheading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-zendots font-medium text-sm max-w-md text-center text-white mt-2 p-3"
      >
        Code for Bharat is a student-driven hackathon that brings tech
        enthusiasts together to innovate, collaborate, and real-world solutions
        in a limited time.
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex gap-10 mt-4 flex-wrap justify-center"
      >
        <IconCard
          icon={ClipBoardIcon}
          iconColor={"text-[#c04123]"}
          iconText={"Entries"}
          iconTextSize={"text-lg"}
          title={"3K+"}
          titleColor={"text-white"}
          titleSize={"text-4xl"}
        />
        <IconCard
          icon={FolderIcon}
          iconColor={"text-[#c04123]"}
          iconText={"Projects"}
          iconTextSize={"text-lg"}
          title={"500+"}
          titleColor={"text-white"}
          titleSize={"text-4xl"}
        />
        <IconCard
          icon={BuildingIcon}
          iconColor={"text-[#c04123]"}
          iconText={"Colleges"}
          iconTextSize={"text-lg"}
          title={"75+"}
          titleColor={"text-white"}
          titleSize={"text-4xl"}
        />
        <IconCard
          icon={LocationIcon}
          iconColor={"text-[#c04123]"}
          iconText={"Cities"}
          iconTextSize={"text-lg"}
          title={"120+"}
          titleColor={"text-white"}
          titleSize={"text-4xl"}
        />
      </motion.div>

      {/* Marquee Carousel */}
      <div className="mt-8">
        <Marquee className="[--duration:15s]">
          {firstRow.map((payload, index) => (
            <CarouselCards key={index} imgUrl={payload.img} name={payload.name} />
          ))}
        </Marquee>
        <Marquee reverse className="mt-3 [--duration:15s]">
          {secondRow.map((payload, index) => (
            <CarouselCards key={index} imgUrl={payload.img} name={payload.name} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const CarouselCards = ({ imgUrl, name }: { imgUrl: string; name: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: Math.random() * 0.5 }} // add some randomness
      className="w-24 h-24 flex justify-center items-center border-4 border-[#c69320] rounded-[22px] overflow-hidden"
    >
      <Image
        className="rounded-lg object-cover"
        src={imgUrl}
        alt={`Image of ${name}`}
        width={240}
        height={240}
        loading="lazy"
      />
    </motion.div>
  );
};
