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

export const AboutSection = () => {
  const firstRow = items.slice(0, items.length / 2);
  const secondRow = items.slice(items.length / 2);
  return (
    <div className="overflow-hidden bg-gray-900 flex flex-col justify-center items-center">
      <div className="tracking-widest font-bold text-6xl text-center text-white p-3 mt-4 ">
        ABOUT US
      </div>
      <div className="tracking-widest font-medium text-sm max-w-md text-center text-white mt-4 p-3 ">
        Code for Bharat is a student-driven hackathon that brings tech
        enthusiasts together to innovate, collaborate, and real-world solutions
        in a limited time.
      </div>
      <div className="flex gap-10 mt-8">
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
      </div>

      <div>
        {/* <div className="mt-10">
          <Marquee className="[--duration:15s]">
            {firstRow.map((payload, index) => (
              <CarouselCards
                key={index}
                imgUrl={payload.img}
                name={payload.name}
              />
            ))}
          </Marquee>
          <Marquee reverse className="mt-3 [--duration:15s]">
            {secondRow.map((payload, index) => (
              <CarouselCards
                key={index}
                imgUrl={payload.img}
                name={payload.name}
              />
            ))}
          </Marquee>
        </div>
      </div> */}
    </div>
    </div>
  );
};

// const CarouselCards = ({ imgUrl, name }: { imgUrl: string; name: string }) => {
//   return (
//     <div className="w-40 h-40 flex justify-center items-center border-4 border-[#c69320] rounded-[22px] overflow-hidden">
//       <Image
//         className="rounded-lg object-cover"
//         src={imgUrl}
//         alt={`Image of ${name}`}
//         width={240} // Fixed width
//         height={240} // Fixed height
//         loading="lazy"
//       />
//     </div>
//   );
// };
