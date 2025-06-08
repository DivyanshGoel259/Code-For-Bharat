import { motion } from "framer-motion";

interface TeamCardArgs {
  imageUrl: string;
  name: string;
  linkedin_Url: string;
}

export const TeamCard = ({ imageUrl, name, linkedin_Url }: TeamCardArgs) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-32 h-52 rounded-lg flex flex-col justify-center items-center"
      style={{ background: 'linear-gradient(to bottom,rgb(182, 75, 51),rgb(202, 58, 26))' }}
    >
      <div className="bg-[#c04123] border-4 rounded-lg border-black w-28 h-32">
        <img className="h-full w-full" src={imageUrl} alt={name} />
      </div>
      <div className="p-2 flex flex-col justify-center items-center">
        <div className="font-zendots font-bold text-center text-black text-sm">
          {name}
        </div>
        <div className="w-24 h-[0.1rem] bg-black" />
        <a href={linkedin_Url} target="_blank" className=" text-white mt-1 w-40 font-zendots font-bold text-center text-black text-sm hover:text-blue-700">
          Linkedin
        </a>
      </div>
    </motion.div>
  );
};
