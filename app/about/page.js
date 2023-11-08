import AboutDesc from "./components/aboutDesc";
import SocialBar from "./components/socialBar";
import AnimatedImage from "./components/animatedImage";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faTwitch,
	faYoutube,
	faInstagram,
	faArtstation,
} from "@fortawesome/free-brands-svg-icons";
import "./aboutStyles.css";

const mookiSocials = [
	{
		name: "Twitter",
		mookiLink: "https://twitter.com/Mooki_TTV",
		imageIcon: faTwitter,
		color: "#A7C7E7",
	},

	{
		name: "Twitch",
		mookiLink: "https://www.twitch.tv/mooki_eu",
		imageIcon: faTwitch,
		color: "#e0d6ff",
	},

	{
		name: "YouTube",
		mookiLink: "https://www.youtube.com/channel/UCVXh1lDMcuirPkp9AQydqIA",
		imageIcon: faYoutube,
		color: "#FF6961",
	},

	{
		name: "Instagram",
		mookiLink: "https://www.instagram.com/mooki_ttv/",
		imageIcon: faInstagram,
		color: "#F8C8DC",
	},

	{
		name: "ArtStation",
		mookiLink: "https://www.artstation.com/harlzeyyy",
		imageIcon: faArtstation,
		color: "#779ecb",
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
								socialColor={item.color}
							/>
						))}
					</div>
					<AnimatedImage />
				</div>
			</div>
		</div>
	);
}
