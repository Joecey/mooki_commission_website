import React from "react";
import Image from "next/image";
import "./styles/commissions.css";
import EXAMPLE from "../public/example_art.jpg";
import Link from "next/link";

// have a props object to take in 1) product name, 2) descriptions and prices
export default function PriceCard(props) {
	// get mouse movement when hovering over price_card_container class
	const id = "example";
	return (
		<Link href={`/commission/${id}`} className={props.cardClass}>
			<div id="overlay"></div>
			<Image
				src={EXAMPLE}
				width={500}
				height={500}
				alt="Example image"
				className="commission_image"
			/>

			<h2 className="title-banner">{props.title}</h2>

			<div className="price_card_box">
				<div className="price_tags">
					<p>{props.prices}</p>
				</div>
			</div>
		</Link>
	);
}
