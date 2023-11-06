import AboutDesc from "../../components/aboutDesc";
import SocialBar from "./components/socialBar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faTwitch,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./aboutStyles.css";

const mookiSocials = [
	{
		name: "Twitter",
		mookiLink: "https://twitter.com/Mooki_TTV",
		imageIcon: faTwitter,
	},

	{
		name: "Twitch",
		mookiLink: "https://www.twitch.tv/mooki_eu",
		imageIcon: faTwitch,
	},

	{
		name: "YouTube",
		mookiLink: "https://www.youtube.com/channel/UCVXh1lDMcuirPkp9AQydqIA",
		imageIcon: faYoutube,
	},
];

export default function AboutPage() {
	return (
		<div id="about-root">
			<div id="intro-description">
				<AboutDesc />
			</div>
			<div id="social-div" className="flexCol">
				<h3 className="socialTitle">Find me on the web</h3>
				<div id="links-container" className="flexRow">
					<div id="socials-container" className="flexCol">
						{mookiSocials.map((item) => (
							<SocialBar
								socialName={item.name}
								socialLink={item.mookiLink}
								imageIcon={item.imageIcon}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
