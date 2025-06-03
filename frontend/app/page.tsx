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
    <div>
      <div>
        <AboutSection/>
        <Team/>
        
      </div>
    </div>
  );
}
