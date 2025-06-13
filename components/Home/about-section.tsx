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

<<<<<<< HEAD
      {/* Subheading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-hagrid-extrabold text-2xl max-w-3xl text-justify text-white mt-4 p-4"
        style={{
          fontFamily: "'Hagrid-Text-Extrabold-trial', serif",
          fontWeight: 800,
          lineHeight: 1.6,
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
      >
        <IconCard
          icon={ClipBoardIcon}
          iconColor={"text-[#c04123]"}
          iconText={"Entries"}
          iconTextSize={"text-lg"}
          title={"1.5K+"}
          titleColor={"text-white"}
          titleSize={"text-4xl"}
        />
        <IconCard
          icon={FolderIcon}
          iconColor={"text-[#c04123]"}
          iconText={"Projects"}
          iconTextSize={"text-lg"}
          title={"135+"}
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
=======
  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    className="tracking-widest font-bold text-4xl md:text-5xl lg:text-6xl text-center text-white p-3 mt-4"
  >
    ABOUT US
  </motion.div>

  {/* Subheading */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="font-zendots font-medium text-base md:text-lg lg:text-xl text-white text-center mt-4 max-w-xl md:max-w-2xl lg:max-w-4xl leading-relaxed px-2"
  >
    Code For Bharat is a student-driven hackathon initiative by Tech Masters India that brings together tech enthusiasts, developers, and young entrepreneurs from across the country to innovate, collaborate, and solve real-world challenges within a limited timeframe. It’s more than just a hackathon—it’s a movement to harness the power of technology for meaningful change.
  </motion.div>

  {/* Stats Section */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="flex gap-10 mt-8 flex-wrap justify-center"
  >
    <IconCard
      icon={ClipBoardIcon}
      iconColor="text-[#c04123]"
      iconText="Entries"
      iconTextSize="text-xl md:text-2xl"
      title="3K+"
      titleColor="text-white"
      titleSize="text-5xl md:text-6xl"
    />
    <IconCard
      icon={FolderIcon}
      iconColor="text-[#c04123]"
      iconText="Projects"
      iconTextSize="text-xl md:text-2xl"
      title="500+"
      titleColor="text-white"
      titleSize="text-5xl md:text-6xl"
    />
    <IconCard
      icon={BuildingIcon}
      iconColor="text-[#c04123]"
      iconText="Colleges"
      iconTextSize="text-xl md:text-2xl"
      title="75+"
      titleColor="text-white"
      titleSize="text-5xl md:text-6xl"
    />
    <IconCard
      icon={LocationIcon}
      iconColor="text-[#c04123]"
      iconText="Cities"
      iconTextSize="text-xl md:text-2xl"
      title="120+"
      titleColor="text-white"
      titleSize="text-5xl md:text-6xl"
    />
  </motion.div>

  {/* Marquee */}
  <div className="mt-10 w-full">
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
>>>>>>> 2f19aaa71c9b44d5e27cf068bc1e404fbe5d01f8

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
