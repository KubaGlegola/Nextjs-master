import { executeGraphql } from "@/api/graphqlApi";
import {
	GetProductByIdDocument,
	ProductsGetListDocument,
	GetProductsByCategorySlugDocument,
	CollectionsGetListBySlugDocument,
	type ProductItemFragment,
	GetProductsListBySearchDocument,
} from "@/gql/graphql";

export const getProductsList = async (take: number, skip: number) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, { take: take, skip: skip });

	return graphqlResponse.products;
};

export const getProductById = async (_id: ProductItemFragment["id"]) => {
	const graphqlResponse = await executeGraphql(GetProductByIdDocument, { id: _id });

	return graphqlResponse.product;
};

export const getProductsByCategory = async (category: string) => {
	const graphqlResponse = await executeGraphql(GetProductsByCategorySlugDocument, {
		slug: category,
	});

	return graphqlResponse.category?.products;
};

export const getCollectionsListBySlug = async (_slug: string) => {
	const graphqlResponse = await executeGraphql(CollectionsGetListBySlugDocument, { slug: _slug });

	return graphqlResponse.collection;
};

export const getProductsBySerach = async (search: string) => {
	const graphqlResponse = await executeGraphql(GetProductsListBySearchDocument, { search: search });

	return graphqlResponse.products;
};
