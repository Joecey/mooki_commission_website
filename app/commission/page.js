import { Fragment } from "react";
import PriceCard from "../../components/priceCard";
import "../../components/styles/commissions.css";

export default function CommissionPage() {
	return (
		<div>
			<h4>
				Before discussing a commission, please refer to my Terms of
				Service!
			</h4>

			<div className="price-cards-group">
				<PriceCard
					title="Sketch"
					Linkname="sketch"
					prices={
						<Fragment>
							Headshot: £15 ($18)
							<br></br>Waist up: £25 ($30)
							<br></br>
							Full body: £40 ($48)
						</Fragment>
					}
				/>
				<PriceCard
					title="Full Colour"
					Linkname="full-colour"
					prices={
						<Fragment>
							Headshot: £40 ($48)
							<br></br>Waist up: £66 ($79.50)
							<br></br>
							Full body: £95 ($114)
						</Fragment>
					}
				/>
			</div>

			<div className="price-cards-group">
				<PriceCard
					title="Full Coloured Splash Art"
					Linkname="full-colour-splash-art"
					prices={
						<Fragment>
							Grayscale: £70 ($84)
							<br></br>Coloured: £230 ($286)
						</Fragment>
					}
				/>
				<PriceCard
					title="Emotes"
					Linkname="emotes"
					prices={
						<Fragment>
							Single emote: £8 ($9)
							<br></br>Five emotes: £32 ($38)
							<br></br>
							Fifteen emotes: £82 ($102)
						</Fragment>
					}
				/>
			</div>

			<div className="price-cards-group">
				<PriceCard
					title="Vtuber Model Art"
					Linkname="vtuber-model-art"
					prices={
						<Fragment>
							Headshot: £15 ($18)
							<br></br>Waist up: £25 ($30)
							<br></br>
							Full body: £40 ($48)
						</Fragment>
					}
				/>
				<PriceCard
					title="Vtuber Rig"
					Linkname="vtuber-rig"
					prices={
						<Fragment>
							Headshot: £14 ($16)
							<br></br>Waist up: £25 ($30)
							<br></br>
							Full body: £35 ($38)
						</Fragment>
					}
				/>
			</div>

			<div className="price-cards-group">
				<PriceCard
					title="V-Rigged Pet/Companion"
					Linkname="vtuber-companion"
					prices={
						<Fragment>
							Headshot: £15 ($18)
							<br></br>Waist up: £25 ($30)
							<br></br>
							Full body: £40 ($48)
						</Fragment>
					}
				/>
			</div>
		</div>
	);
}
