import { Fragment } from "react";
import PriceCard from "../../components/priceCard";
import "../../components/styles/commissions.css";
import Link from "next/link";
import Image from "next/image";

// static images need to be loading from /public
const vgenPage = "/vgen-landing-page.png";

export default function CommissionPage() {
	return (
		<div>
			<h4>
				(Before discussing a commission, please refer to my{" "}
				<Link href="/about" className="hover-link">
					Terms of Service!
				</Link>
				)
			</h4>
			<h2>How it Works</h2>
			<div className="commission-step-container">
				<div className="image-container">
					<img
						src={vgenPage}
						alt="Mooki VGen Page"
						className="image-container"
					/>
				</div>

				<div className="explanation-container">
					<h3>Step 1: Visit My VGen page</h3>
					<p>
						Visit my VGen page to have a look at my previous work
						and clients
					</p>
				</div>
			</div>

			<div className="commission-step-container">
				<div className="explanation-container">
					<h3>Step 2: Send in your references</h3>
					<p>
						Choose your images, be descriptive as possible, give me
						as much as possible to work with
					</p>
				</div>

				<div className="image-container">
					<img
						src={vgenPage}
						alt="Mooki VGen Page"
						className="image-container"
					/>
				</div>
			</div>

			<div className="commission-step-container">
				<div className="image-container">
					<img
						src={vgenPage}
						alt="Mooki VGen Page"
						className="image-container"
					/>
				</div>

				<div className="explanation-container">
					<h3>Step 3: Let the magic happen!</h3>
					<p>
						I'll provide you with an estimated completion time.
						While you wait, I'll provide weekly updates and windows
						where you can ask for changes
					</p>
				</div>
			</div>
		</div>
	);
}
