import "../aboutStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialBar({ socialName, socialLink, imageIcon }) {
	// dynamically change the colour here
	return (
		<a href={socialLink} className="socialBar">
			<p className="linkText">{socialName}</p>
			<FontAwesomeIcon icon={imageIcon} className="icon" />
		</a>
	);
}
