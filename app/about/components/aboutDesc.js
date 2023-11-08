"use client";
import React from "react";
import "/components/styles/descriptions.css";
import Image from "next/image";
import MOOKI from "/assets/images/mooki-intro.png";
import { motion } from "framer-motion";

//TODO make this reuseable > reuseable text and image
export default function AboutDesc() {
	return (
		<motion.div
			className="intro-flex"
			initial={{ opacity: 0, x: -100 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{
				duration: 0.5,
				ease: "easeOut",
			}}
		>
			<Image
				className="text-image"
				src={MOOKI}
				alt="Mooki drawing portrait"
			/>
			<div className="description">
				<h2>Hey There!</h2>
				<p>
					Get ready to immerse yourself in the breathtaking world of
					digital art, where creativity knows no bounds! My name is
					Harley and I am a passionate digital artist, specializing in
					concept art, environment art and character art. <br></br>
					<br></br>
					Since I was very young, I have been bringing my imagination
					to life using digital tools and software. Now, I am studying
					these skills at university to further refine my craft. With
					a
					<strong>
						{" "}
						Level 3 diploma in Graphics, Illustration and Game Art
					</strong>{" "}
					under my belt, earned after graduating college in 2022, I am
					equipped with the skills to bring your wildest artistic
					visions to life using the latest digital technologies!
					<br></br>
					<br></br>
					Contact me! <strong>harlzeyyy@gmail.com</strong>
				</p>
			</div>
		</motion.div>
	);
}
