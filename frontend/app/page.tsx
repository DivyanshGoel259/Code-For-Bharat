import { AboutSection } from "@/components/Home/about-section";
import { Team } from "@/components/Home/Team";
import { Tracks } from "@/components/Home/tracks";
import Image from "next/image";
import DigitalSwag from "@/components/Home/digitalswag";
import PrizePool from "@/components/Home/prizepool";
import Sponsors from "@/components/Home/sponsors";
import FAQ from "@/components/Home/faqs";
import AnimatedSection from "@/components/Home/animatedsection";

export default function Home() {
  return (
    <div className="bg-[url(https://res.cloudinary.com/dlauialhp/image/upload/v1748342442/background_rbg9xv.png)] bg-no-repeat bg-cover bg-center">
      <div className="p-2 ">
        <AboutSection/>

      </div>
      <div className="p-2 mt-4">
        <Team/>
      </div>
      <div className="p-2 mt-4">
        <Tracks/>
      </div>
    </div>
  );
}
