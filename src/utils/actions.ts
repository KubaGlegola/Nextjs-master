"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { executeGraphql } from "@/api/graphqlApi";
import {
	CartChangeItemQuantityDocument,
	CartCompleteDocument,
	CartRemoveItemDocument,
	ReviewCreateDocument,
} from "@/gql/graphql";
import { type ReviewType } from "@/utils/types";

export const changeCartItemQuantity = (cartId: string, itemId: string, quantity: number) => {
	revalidateTag("cart");
	return executeGraphql({
		query: CartChangeItemQuantityDocument,
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
		query: CartRemoveItemDocument,
		variables: {
			cartId: cartId,
			productId: itemId,
		},
	});
};

export const cartComplete = async (cartId: string) => {
	cookies().set("cartId", "");
	return executeGraphql({
		query: CartCompleteDocument,
		variables: {
			cartId: cartId,
		},
	});
};

export const addNewReview = async (productId: string, formData: FormData) => {
	const newReviewData = Object.fromEntries(formData) as ReviewType;
	revalidateTag("reviews");
	return executeGraphql({
		query: ReviewCreateDocument,
		variables: {
			productId: productId,
			description: newReviewData.content,
			email: newReviewData.email,
			title: newReviewData.headline,
			author: newReviewData.name,
			rating: Number(newReviewData.rating),
		},
	});
};
