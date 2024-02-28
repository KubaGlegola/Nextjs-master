import { cookies } from "next/headers";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";
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

	cookies().set("cartId", cart.cartFindOrCreate.id);
	return cart.cartFindOrCreate;
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
	return executeGraphql({ query: CartCreateDocument, variables: {} });
};

export const addProductToCart = async (cartId: string, productId: string, quantity: string) => {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id: productId,
		},
		cache: "no-cache",
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql({
		query: CartAddItemDocument,
		variables: {
			cartId,
			productId,
			quantity: +quantity,
		},
	});
};
