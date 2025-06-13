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
    <div id='about' className="font-Hagrid overflow-hidden bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center py-10 px-4">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-2" style={{ fontFamily: "'Hagrid-Text-Extrabold-trial', serif" }}>
        About Us
      </h2>

      {/* Subheading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl text-justify text-white mt-4 p-4"
        style={{
          fontFamily: "Zendots, monospace",
          fontWeight: 400,
          lineHeight: 1.6,
          letterSpacing: "0.04em", // a little bit broad
        }}
      >
        Code For Bharat is a student-driven hackathon initiative by Tech Masters India that brings together tech enthusiasts, developers, and young entrepreneurs from across the country to innovate, collaborate, and solve real-world challenges within a limited timeframe. It’s more than just a hackathon—it’s a movement to harness the power of technology for meaningful change.
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex gap-10 mt-4 flex-wrap justify-center"
        style={{ fontFamily: "Zendots, monospace" }} // Apply Zendots font
      >
        <IconCard
          icon={ClipBoardIcon}
          iconColor={"text-[#c04123]"}
          iconText={"Entries"}
          iconTextSize={"text-lg"}
          title={"1.5K+"}
          titleColor={"text-white"}
          titleSize={"text-4xl"}
          iconSize={180}
        />
        <IconCard
          icon={FolderIcon}
          iconColor={"text-[#c04123]"}
          iconText={"Projects"}
          iconTextSize={"text-lg"}
          title={"135+"}
          titleColor={"text-white"}
          titleSize={"text-4xl"}
          iconSize={180}
        />
        <IconCard
          icon={BuildingIcon}
          iconColor={"text-[#c04123]"}
          iconText={"Colleges"}
          iconTextSize={"text-lg"}
          title={"75+"}
          titleColor={"text-white"}
          titleSize={"text-4xl"}
          iconSize={180}
        />
        <IconCard
          icon={LocationIcon}
          iconColor={"text-[#c04123]"}
          iconText={"Cities"}
          iconTextSize={"text-lg"}
          title={"120+"}
          titleColor={"text-white"}
          titleSize={"text-4xl"}
          iconSize={180}
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
