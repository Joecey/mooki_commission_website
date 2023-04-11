"use client";

import React, { Component } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import "./portfolio.css";

export default function StandardImageList() {
	return (
		<ImageList sx={{ width: 800, height: 450 }} cols={3} rowHeight={164}>
			{itemData.map((item) => (
				<ImageListItem key={item.img}>
					<img
						src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
						srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
						alt={item.title}
						loading="lazy"
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
}

const itemData = [
	{
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Burger",
	},

	{
		img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
		title: "Bike",
	},
];
