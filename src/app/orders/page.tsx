import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { executeGraphql } from "@/api/graphqlApi";
import { OrdersGetByEmailDocument } from "@/gql/graphql";

export default async function OrdersPage() {
	const user = await currentUser();
	if (!user) {
		redirect("/sign-in");
	}

	const email = user.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)?.emailAddress;

	if (!email) {
		return <div>Something went wrong</div>;
	}

	const orders = await executeGraphql({
		query: OrdersGetByEmailDocument,
		variables: {
			email: email,
		},
	});

	console.log(orders);

	return (
		<div>
			<h1>Orders</h1>
		</div>
	);
}
