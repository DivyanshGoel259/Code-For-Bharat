import { AboutSection } from "@/components/Home/about-section";
import Image from "next/image";
import DigitalSwag from "@/components/Home/digitalswag";
import PrizePool from "@/components/Home/prizepool";
import Sponsors from "@/components/Home/sponsors";
import FAQ from "@/components/Home/faqs";

export default function Home() {
  return (
    <div>
      <AboutSection></AboutSection>
      <DigitalSwag/>
      <PrizePool/>
      <Sponsors/>
      <FAQ/>
    </div>
  );
}
