export default function commissionDetails({ params }) {
	const commissionType = params.id;

	return <h3>Welcome to commission details ({commissionType})</h3>;
}
