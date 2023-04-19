"use client";

import React, { Component } from "react";
import Link from "next/link";

import "./portfolio.css";

// navbar function
export default function Navbar() {
	return (
		// don't forget to wrap in react fragment!
		<>
			<div id="navbar">
				{/* <h1>Hello, I'm Mooki</h1> */}
				<nav>
					<Link href="/">Portfolio</Link>
					{/* <Link href="/commission">Commissions</Link>
					<Link href="/instagram">Instagram</Link> */}
					<Link href="/about">About</Link>
				</nav>
			</div>
			<Line />
		</>
	);
}

// line function
function Line() {
	return <div className="line"></div>;
}

// export default Navbar;
