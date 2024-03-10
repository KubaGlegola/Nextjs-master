/// <reference types="stripe-event-types" />

import { type NextRequest } from "next/server";
import Stripe from "stripe";
import { cartComplete } from "@/utils/actions";

export async function POST(req: NextRequest): Promise<Response> {
	const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
	if (!webhookSecret) {
		return new Response("No webhook secret", { status: 500 });
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		return new Response("No Stripe secret key", { status: 500 });
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const signature = req.headers.get("stripe-signature");

	if (!signature) {
		return new Response("No signature", { status: 400 });
	}

	const event = stripe.webhooks.constructEvent(await req.text(), signature, webhookSecret) as Stripe.DiscriminatedEvent;

	switch (event.type) {
		case "payment_intent.succeeded": {
			const orderId = event.data.object.metadata.orderId;
			if (!orderId) {
				return new Response("No orderId", { status: 400 });
			}
			await cartComplete(orderId);
			break;
		}
		case "payment_intent.payment_failed": {
		}
	}

	return new Response(null, { status: 204 });
}
