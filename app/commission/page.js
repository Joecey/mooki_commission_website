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
					title="Headshots"
					prices={
						<Fragment>
							Headshot: £15 ($18)
							<br></br>Waist up: £25 ($30)
							<br></br>
							Full body: £40 ($48)
						</Fragment>
					}
					cardClass="fade-in price_card_container"
				/>
				<PriceCard
					title="Full body"
					prices={
						<Fragment>
							Headshot: £14 ($16)
							<br></br>Waist up: £25 ($30)
							<br></br>
							Full body: £35 ($38)
						</Fragment>
					}
					cardClass="fade-in-alt price_card_container"
				/>
			</div>
		</div>
	);
}
