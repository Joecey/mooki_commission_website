import React from "react";
import Image from "next/image";
import "./styles/commissions.css";
import EXAMPLE from "../public/example_art.jpg";

// have a props object to take in 1) product name, 2) descriptions and prices
export default function PriceCard(props) {
	// get mouse movement when hovering over price_card_container class

	return (
		<div className="price_card_container">
			<Image
				src={EXAMPLE}
				width={500}
				height={500}
				alt="Example image"
				className="commission_image"
			/>
			<div className="overlay"></div>
			<h3 className="title-banner">Title</h3>

			<div className="price_card_box">
				<div className="price_tags">
					<p>
						Headshot: £15 ($18) <br></br>Waist up: £25 ($30){" "}
						<br></br>Full body: £40 ($48)
					</p>
				</div>
			</div>
		</div>
	);
}
