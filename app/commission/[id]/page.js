import Link from "next/link";

export default function commissionDetails({ params }) {
	const commissionType = params.id;
	if (commissionType === "sketch") {
		return (
			<div>
				<Link href={"/commission"}>Back to commissions</Link>
				<h1>I'm showing a different image cus im cool</h1>
				<h3>Welcome to commission details ({commissionType})</h3>
			</div>
		);
	}

	return (
		<div>
			<Link href={"/commission"}>Back to commissions</Link>
			<h3>Welcome to commission details ({commissionType})</h3>
		</div>
	);
}
