"use client";

import React from "react";
import Image from "next/image";
import "./styles/portfolio.css";
import "./styles/imageGrid.css";

// TODO 19/4/23 need to replace this with a grid box cus image list is dogshit

// ? There is an inner scroll??? why - will probably switch to grid box
// * 20/4/23 changing this to a grid box

// need to use loader for external images
const imageLoader = ({ src, width, quality }) => {
	// provide quality or default to 75%
	return `${src}?w=${width}&q=${quality || 75}`;
};

export default function StandardImageList() {
	const random_fade = ["fade-in-1", "fade-in-2", "fade-in-3", "fade-in-4"];

	return (
		<div className="grid_container">
			<div className="grid_port">
				{/* map item list here  */}
				{itemData.map((item) => (
					<div
						className={
							"card" +
							" " +
							random_fade[
								Math.floor(Math.random() * random_fade.length)
							]
						}
					>
						<Image
							// needed to add image loader here
							loader={imageLoader}
							className={"port_image"}
							// remember to include website in next.config.js
							src={item.img}
							width={500}
							height={500}
							alt={item.title}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

const itemData = [
	{
		img: "https://cdnb.artstation.com/p/assets/images/images/061/909/081/large/mooki_-rsz-1harley-dawson-splash-art.jpg?1681908142",
		title: "Mooki 1.0",
	},
	{
		img: "https://cdna.artstation.com/p/assets/images/images/061/908/950/medium/mooki_-progress-5.jpg?1681907879",
		title: "Mooki 1.0 black white",
	},

	{
		img: "https://cdna.artstation.com/p/assets/images/images/057/799/030/medium/harley-dawson-211250.jpg?1672699962",
		title: "Star guardian Zoe ",
	},
	{
		img: "https://cdna.artstation.com/p/assets/images/images/053/451/032/medium/harley-dawson-scorcerer-lux4250.jpg?1662236688",
		title: "Lux",
	},

	{
		img: "https://cdnb.artstation.com/p/assets/images/images/047/542/227/medium/harley-dawson-you-wanted-a-villain-3.jpg?1647863010",
		title: "Viper",
	},
	{
		img: "https://cdna.artstation.com/p/assets/images/images/046/432/006/medium/harley-dawson-emi-vtuber-model-1.jpg?1645103244",
		title: "Vtuber model",
	},

	{
		img: "https://cdnb.artstation.com/p/assets/images/images/046/006/261/medium/harley-dawson-valorant-agent-concept-rosita.jpg?1644075185",
		title: "Valorant agent concept",
	},
	{
		img: "https://cdnb.artstation.com/p/assets/images/images/043/312/225/medium/harley-dawson-vex.jpg?1636923860",
		title: "vex",
	},

	{
		img: "https://cdna.artstation.com/p/assets/images/images/043/312/126/medium/harley-dawson-sakuura-new-concept.jpg?1636923707",
		title: "sakuura",
	},
	{
		img: "https://cdna.artstation.com/p/assets/images/images/043/312/070/medium/harley-dawson-gothic-orianna.jpg?1636923488",
		title: "Orianna",
	},

	{
		img: "https://cdnb.artstation.com/p/assets/images/images/043/310/565/medium/harley-dawson-cat-girl.jpg?1636919630",
		title: "Borgir",
	},
	{
		img: "https://cdnb.artstation.com/p/assets/images/images/043/312/001/medium/harley-dawson-rem-and-ram.jpg?1636923310",
		title: "rem and ram",
	},

	{
		img: "https://cdnb.artstation.com/p/assets/images/images/043/311/771/medium/harley-dawson-kanami.jpg?1636922712",
		title: "hatsuki",
	},
	{
		img: "https://cdnb.artstation.com/p/assets/images/images/043/311/965/medium/harley-dawson-elf-girl.jpg?1636923212",
		title: "elven",
	},

	{
		img: "https://cdnb.artstation.com/p/assets/images/images/043/309/821/medium/harley-dawson-7.jpg?1636917881",
		title: "kai-sa",
	},
];
