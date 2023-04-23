import React from "react";
import Image from "next/image";
import "./styles/commissions.css";

import PENCIL from "../assets/commission/icons8-pencil-100.png";

// have a props object to take in 1) product name, 2) descriptions and prices
export default function PriceCard() {
	// get mouse movement when hovering over price_card_container class

	return (
		<div className="price_card_container">
			<div className="price_card_box">
				<Image src={PENCIL} width={60} height={60} alt="test" />
				<div>
					<h3>
						<strong>Sketch</strong>
					</h3>
				</div>
				<div className="price_line"></div>
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
