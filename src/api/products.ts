import { executeGraphql } from "@/api/graphqlApi";
import {
	GetProductByIdDocument,
	type ProductListItemFragment,
	ProductsGetListDocument,
	GetProductsByCategorySlugDocument,
} from "@/gql/graphql";

export const getProductsList = async (take: number, skip: number) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, { take: take, skip: skip });

	return graphqlResponse.products;
};

export const getProductById = async (_id: ProductListItemFragment["id"]) => {
	const graphqlResponse = await executeGraphql(GetProductByIdDocument, { id: _id });

	return graphqlResponse.product;
};

export const getProductsByCategory = async (category: string) => {
	const graphqlResponse = await executeGraphql(GetProductsByCategorySlugDocument, {
		slug: category,
	});

	return graphqlResponse.category?.products;
};
