import { AboutSection } from "@/components/Home/about-section";
import { Team } from "@/components/Home/Team";
import { Tracks } from "@/components/Home/tracks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <AboutSection></AboutSection> */}
    <Tracks/>
      <Team/>
    </div>
  );
}
