import { executeGraphql } from "@/api/graphqlApi";
import {
	ProductsGetListDocument,
	GetProductsByCategorySlugDocument,
	CollectionsGetListBySlugDocument,
	type ProductItemFragment,
	ProductGetByIdDocument,
	ProductsGetListBySearchDocument,
	ReviewsGetDocument,
} from "@/gql/graphql";

export const getProductsList = async (take: number, skip: number) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: { take: take, skip: skip },
	});

	return graphqlResponse.products;
};

export const getProductById = async (_id: ProductItemFragment["id"]) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: _id },
	});

	return graphqlResponse.product;
};

export const getProductsByCategory = async (category: string) => {
	const graphqlResponse = await executeGraphql({
		query: GetProductsByCategorySlugDocument,
		variables: {
			slug: category,
		},
	});

	return graphqlResponse.category?.products;
};

export const getCollectionsListBySlug = async (_slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetListBySlugDocument,
		variables: { slug: _slug },
	});

	return graphqlResponse.collection;
};

export const getProductsBySerach = async (search: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListBySearchDocument,
		variables: { search: search },
	});

	return graphqlResponse.products;
};

export const getProductReviews = async (productId: string) => {
	const graphqlResponse = await executeGraphql({
		query: ReviewsGetDocument,
		variables: { id: productId },
		next: { tags: ["reviews"] },
	});

	return graphqlResponse.product;
};
