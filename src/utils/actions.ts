"use server";

import { revalidateTag } from "next/cache";
import { executeGraphql } from "@/api/graphqlApi";
import { CartRemoveProductDocument, CartSetItemQuantityDocument } from "@/gql/graphql";

export const changeCartItemQuantity = (cartId: string, itemId: string, quantity: number) => {
	revalidateTag("cart");
	return executeGraphql({
		query: CartSetItemQuantityDocument,
		variables: {
			cartId: cartId,
			productId: itemId,
			quantity: quantity,
		},
		next: {
			tags: ["cart"],
		},
	});
};

export const removeItemFromCart = (cartId: string, itemId: string) => {
	return executeGraphql({
		query: CartRemoveProductDocument,
		variables: {
			cartId: cartId,
			productId: itemId,
		},
	});
};
