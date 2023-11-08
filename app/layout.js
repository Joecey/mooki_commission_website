import "./globals.css";
import "./blobsStyle.css";

// use this to create our nav bar

import Navbar from "../components/navbar";
import Footer from "../components/footer";
// import Line from "../components/navbar";

export const metadata = {
	title: "Mooki Portfolio and Comissions",
	description: "Mooki's Personal Portfolio Website and Commissions Page",
};

// export nav bar here
export default function RootLayout({ children }) {
	return (
		<html>
			<body>
				<div id="orange-blur-blob" className="orange-blob"></div>
				<div id="pink-blur-blob" className="pink-blob"></div>
				<main>
					{/* we are going to define some blur blobs here  */}
					<div id="main_title">
						<h1>Mooki</h1>
					</div>
					<Navbar />

					{/* display children of the directory this is in (except subdirs) */}
					{children}

					{/* Footer goes here */}
					<Footer />
				</main>
			</body>
		</html>
	);
}
