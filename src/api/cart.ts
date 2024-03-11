import { cookies } from "next/headers";

import { CartAddItemDocument, CartFindOrCreateDocument, CartGetByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";

export const getOrCreateCart = async () => {
	const existingCart = await getCartFromCookies();

	if (existingCart) {
		return existingCart;
	}

	const cart = await createCart();
	if (!cart.cartFindOrCreate) {
		throw new Error("Failed to create cart");
	}
	cookies().set("cartId", cart.cartFindOrCreate.cart.id, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2) });
	return cart.cartFindOrCreate.cart;
};

export const getCartFromCookies = async () => {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const cart = await executeGraphql({
			query: CartGetByIdDocument,
			variables: { id: cartId },
			cache: "no-cache",
			next: { tags: ["cart"] },
		});
		if (cart.cart) {
			return cart.cart;
		}
	}
};

export const createCart = () => {
	return executeGraphql({ query: CartFindOrCreateDocument, variables: {} });
};

export const addProductToCart = async (cartId: string, productId: string, quantity: number) => {
	await executeGraphql({
		query: CartAddItemDocument,
		variables: {
			cartId,
			productId,
			quantity: quantity,
		},
	});
};
