"use client";

import React, { Component } from "react";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav>
			<Link href="/">Portfolio</Link>
			<Link href="/instagram">Instagram</Link>
			<Link href="/about">About</Link>
			<Link href="/commission">Commission</Link>
		</nav>
	);
}

// export default Navbar;
