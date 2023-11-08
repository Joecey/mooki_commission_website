"use client";
import "../aboutStyles.css";
import { motion } from "framer-motion";

export default function AnimatedImage() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100, rotateX: 0, rotateZ: 0 }}
			whileInView={{ opacity: 1, y: 0, rotateX: 20, rotateZ: 5 }}
			transition={{ delay: 0.2 }}
			id="social-image"
			className="social-image-container"
		></motion.div>
	);
}
