import "./globals.css";

// use this to create our nav bar
import Link from "next/link";

export const metadata = {
	title: "Mooki Portfolio and Comissions",
	description: "Mooki's Personal Portfolio Website and Commissions Page",
};

// export nav bar here
export default function RootLayout({ children }) {
	return (
		<html>
			<body>
				<main>
					<nav>
						<Link href="/">Portfolio</Link>
						<Link href="/instagram">Instagram</Link>
						<Link href="/about">About</Link>
						<Link href="/commission">Commission</Link>
					</nav>
					{/* display children of the directory this is in (except subdirs) */}
					{children}
				</main>
			</body>
		</html>
	);
}
