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
    <div id='about' className="mt-10 font-Hagrid overflow-hidden bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center py-10 px-4">

      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-5xl lg:text-7xl font-bold text-center text-white mb-2"
        style={{ fontFamily: "Hagrid-Text-Extrabold-trial, serif" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        ABOUT US
      </motion.h2>

      {/* Subheading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-6xl text-white mt-4 p-4 text-md sm:text-xl text-center"
        style={{
          fontFamily: "Zendots, monospace",
          fontWeight: 400,
          lineHeight: 1.6,
          letterSpacing: "0.04em",
        }}
      >
        Code For Bharat is a student-driven hackathon initiative by Tech Masters India that brings together tech enthusiasts, developers, and young entrepreneurs from across the country to innovate, collaborate, and solve real-world challenges within a limited timeframe. It’s more than just a hackathon—it’s a movement to harness the power of technology for meaningful change.
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex gap-16 mt-8 flex-wrap justify-center"
        style={{ fontFamily: "Zendots, monospace" }} // Apply Zendots font
      >
        <IconCard
          icon={ClipBoardIcon}
          iconColor={"text-[#c04123]"}
          iconText={"Entries"}
          iconTextSize={"text-2xl"}
          title={"1.5K+"}
          titleColor={"text-white"}
          titleSize={"text-6xl"}
        />
        <IconCard
          icon={FolderIcon}
          iconColor={"text-[#c04123]"}
          iconText={"Projects"}
          iconTextSize={"text-2xl"}
          title={"135+"}
          titleColor={"text-white"}
          titleSize={"text-6xl"}
        />
        <IconCard
          icon={BuildingIcon}
          iconColor={"text-[#c04123]"}
          iconText={"Colleges"}
          iconTextSize={"text-2xl"}
          title={"75+"}
          titleColor={"text-white"}
          titleSize={"text-6xl"}
        />
        <IconCard
          icon={LocationIcon}
          iconColor={"text-[#c04123]"}
          iconText={"Cities"}
          iconTextSize={"text-2xl"}
          title={"120+"}
          titleColor={"text-white"}
          titleSize={"text-6xl"}
        />
      </motion.div>

      {/* Marquee Carousel */}
      <motion.div className="mt-8" >
        <Marquee className="[--duration:15s]">
          {firstRow.map((payload, index) => (
            <CarouselCards key={index} imgUrl={payload.img} name={payload.name} />
          ))}
        </Marquee>
        <Marquee  reverse className="mt-3 [--duration:15s]">
          {secondRow.map((payload, index) => (
            <CarouselCards key={index} imgUrl={payload.img} name={payload.name} />
          ))}
        </Marquee>
      </motion.div>
    </div>
  );
};

const CarouselCards = ({ imgUrl, name }: { imgUrl: string; name: string }) => {
  return (
    <motion.div
      className="w-40 h-40 flex justify-center items-center border-4 border-[#e9451f] rounded-[22px] overflow-hidden" // increased size
    >
      <Image
        className="rounded-lg object-cover"
        src={imgUrl}
        alt={`Image of ${name}`}
        width={320}
        height={320}
        loading="lazy"
      />
    </motion.div>
  );
};
