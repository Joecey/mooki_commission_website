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
				<PriceCard />
				<PriceCard />
			</div>
		</div>
	);
}
