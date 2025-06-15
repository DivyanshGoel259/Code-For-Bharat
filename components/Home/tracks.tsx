"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tracks = [
	{
		name: "WEB3",
		id: 1,
		imageUrl:
			"https://i.pinimg.com/736x/00/4b/22/004b22b901be85ea17153793942ab82a.jpg",
	},
	{
		name: "AI/ML",
		id: 2,
		imageUrl:
			"https://i.pinimg.com/736x/bf/df/34/bfdf347941e0c16abe5a72fdbdd46075.jpg",
	},
	{
		name: "HEALTHCARE",
		id: 3,
		imageUrl:
			"https://i.pinimg.com/736x/0f/78/61/0f78610131f53fa273b520e738d1539e.jpg",
	},
	{
		name: "EDTECH",
		id: 4,
		imageUrl:
			"https://i.pinimg.com/736x/04/1c/5d/041c5db7ddba929d535e1f419904addc.jpg",
	},
	{
		name: "FINTECH",
		id: 5,
		imageUrl:
			"https://i.pinimg.com/736x/31/3d/b5/313db5299dc1fcd438c1f1439238ef6d.jpg",
	},
	{
		name: "OPEN INNOVATION",
		id: 6,
		imageUrl:
			"https://i.pinimg.com/736x/cb/f1/0d/cbf10dd3f4200d2853f5f51519554f68.jpg",
	},
];

export const Tracks = () => {
	// Default open card is the first one (id: 1)
	const [track, setTrack] = useState({ id: 6, isOpen: true });

	return (
		<div
			className="min-h-screen flex flex-col justify-center items-center"
			style={{
				background: "transparent",
				fontFamily: "Zendots, monospace",
			}}
		>
			{/* Heading */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, amount: 0.5 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="text-7xl font-bold text-white mb-12"
				style={{ fontFamily: "Hagrid-Text-Extrabold-trial, serif" }}
			>
				Tracks
			</motion.div>

			<div className="mt-10 p-4 flex gap-6">
				{tracks.map((payload, index) => {
					// Always keep one card open (default: first card)
					const isActive =
						(track.isOpen && track.id === payload.id) ||
						(!track.isOpen && payload.id === 1);

					return (
						<motion.div
							key={payload.id}
							onMouseEnter={() => {
								setTrack({ id: payload.id, isOpen: true });
							}}
							onMouseLeave={() => {
								setTrack({ ...track, isOpen: false });
							}}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false, amount: 0.5 }}
							transition={{
								duration: 0.6,
								ease: "easeOut",
								delay: 0.1 * index,
							}}
							className={`transition-all duration-500 ease-in-out ${
								isActive
									? "w-[22rem] rounded-[40px]"
									: "w-[7rem] rounded-[40px]"
							} h-[28rem] bg-[#c04123] relative overflow-hidden`}
						>
							<img
								src={payload.imageUrl}
								alt={payload.name}
								className="w-full h-full object-cover"
							/>
							<div className="bg-black absolute p-4 bottom-0 left-0 right-0">
								<div
									className="font-bold text-2xl p-2 rounded-full border-4 border-white text-white bg-transparent flex justify-center items-center text-center"
									style={{ fontFamily: "Zendots, monospace" }}
								>
									{isActive ? payload.name : payload.id}
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};
