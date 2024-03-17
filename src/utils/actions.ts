"use server";

import { revalidateTag } from "next/cache";
import { executeGraphql } from "@/api/graphqlApi";
import {
	CartChangeItemQuantityDocument,
	CartCompleteDocument,
	CartRemoveItemDocument,
	ReviewCreateDocument,
} from "@/gql/graphql";
import { type ReviewType } from "@/utils/types";

export const changeCartItemQuantity = (cartId: string, itemId: string, quantity: number) => {
	const response = executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: {
			cartId: cartId,
			productId: itemId,
			quantity: quantity,
		},
	});
	revalidateTag("cart");
	return response;
};

export const removeItemFromCart = (cartId: string, itemId: string) => {
	const response = executeGraphql({
		query: CartRemoveItemDocument,
		variables: {
			cartId: cartId,
			productId: itemId,
		},
	});
	revalidateTag("cart");
	return response;
};

export const cartComplete = async (cartId: string, email: string) => {
	return executeGraphql({
		query: CartCompleteDocument,
		variables: {
			cartId: cartId,
			userEmail: email,
		},
	});
};

export const addNewReview = async (productId: string, formData: FormData) => {
	const newReviewData = Object.fromEntries(formData) as ReviewType;
	const response = executeGraphql({
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
	revalidateTag("reviews");
	return response;
};
