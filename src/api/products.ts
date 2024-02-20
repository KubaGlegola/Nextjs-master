import { executeGraphql } from "@/api/graphqlApi";
import {
	GetProductByIdDocument,
	type ProductListItemFragment,
	ProductsGetListDocument,
} from "@/gql/graphql";

export const getProductsList = async (take: number, skip: number) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, { take: take, skip: skip });

	return graphqlResponse.products;
};

// export const getProductsByCategorySlug = async (slug: string) => {
// 	const graphqlResponse = await executeGraphql(ProductsGetByCategorySlugDocument, { slug: slug });

// 	return graphqlResponse.categories[0]?.products;
// };

export const getProductById = async (_id: ProductListItemFragment["id"]) => {
	const graphqlResponse = await executeGraphql(GetProductByIdDocument, { id: _id });

	return graphqlResponse.product;
};
