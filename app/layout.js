import "./globals.css";

// use this to create our nav bar

import Navbar from "../components/navbar";

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
					<Navbar />

					{/* display children of the directory this is in (except subdirs) */}
					{children}
				</main>
			</body>
		</html>
	);
}
