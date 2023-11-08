"use client";
import "../aboutStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function SocialBar({
	socialName,
	socialLink,
	imageIcon,
	socialColor,
}) {
	// dynamically change the colour here
	return (
		<motion.a
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ type: "spring", stiffness: 400, damping: 20 }}
			whileHover={{
				scale: 1.1,
			}}
			href={socialLink}
			className="socialBar"
			style={{ "background-color": `${socialColor}` }}
		>
			<p className="linkText">{socialName}</p>
			<FontAwesomeIcon icon={imageIcon} className="icon" />
		</motion.a>
	);
}
