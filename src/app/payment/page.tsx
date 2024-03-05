import { redirect } from "next/navigation";
import Stripe from "stripe";
import { getCartFromCookies } from "@/api/cart";
import { StripeForm } from "@/ui/molecules/StripeForm";

export default async function PaymentPage() {
	const cart = await getCartFromCookies();
	if (!cart) {
		redirect("/");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const items = cart.items.edges.map((edge) => edge.node);

	const totalAmount = items.reduce((acc, item) => {
		return acc + item.product.price * item.quantity;
	}, 0);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: totalAmount,
		currency: "pln",
		automatic_payment_methods: {
			enabled: true,
		},
		metadata: {
			orderId: cart.id,
		},
	});

	if (!paymentIntent.client_secret) {
		throw new Error("Missing client_secret");
	}

	return <StripeForm clientSecret={paymentIntent.client_secret} />;
}
