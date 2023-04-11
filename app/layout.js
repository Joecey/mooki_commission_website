import "./globals.css";

// use this to create our nav bar

import Navbar from "../components/navbar";
import Line from "../components/line";

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
					<div id="main_title">
						<h1>Mooki</h1>
					</div>
					<Navbar />
					<Line />

					{/* display children of the directory this is in (except subdirs) */}
					{children}
				</main>
			</body>
		</html>
	);
}
