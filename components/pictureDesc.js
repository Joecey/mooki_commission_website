// `use client`;
import React from "react";
import "./styles/descriptions.css";
import Image from "next/image";
import DESCRIPTIONIMAGE from "../assets/images/dogpng.png";

//TODO make this reuseable > reuseable text and image
export default function PictureDesc() {
	return (
		<div className="intro-flex">
			<Image className="text-image" src={DESCRIPTIONIMAGE} alt="test" />;
			<h1>This is the commission page</h1>
			<p>
				My name is Harley and I'm a digital artist currently studying
				Concept art, environment art and character art at university!
				Here you've come accross my commission page; It presents my
				prices and you can view examples of my previous artworks. If you
				would like to purchase a commission, my email and socials are at
				the bottom of this page!
			</p>
		</div>
	);
}
