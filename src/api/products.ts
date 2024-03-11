import { executeGraphql } from "@/api/graphqlApi";
import {
	ProductGetByIdDocument,
	ProductsGetListDocument,
	type SortDirection,
	type ProductSortBy,
	ProductsGetByCategorySlugDocument,
	ProductsGetListBySearchDocument,
} from "@/gql/graphql";

export const getProductsList = async (first: number, skip: number, order?: SortDirection, orderBy?: ProductSortBy) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: { first: first, skip: skip, order: order, orderBy: orderBy },
	});

	return graphqlResponse.products;
	return graphqlResponse.products;
};

export const getProductById = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { slug: slug },
	});

	return graphqlResponse.product;
};

export const getProductsByCategory = async (first: number, skip: number, category: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCategorySlugDocument,
		variables: {
			first: first,
			skip: skip,
			slug: category,
		},
	});

	return graphqlResponse;
};

export const getProductsBySerach = async (search: string, order?: SortDirection, orderBy?: ProductSortBy) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListBySearchDocument,
		variables: { search: search, order: order, orderBy: orderBy },
	});

	return graphqlResponse;
};
