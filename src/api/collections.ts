import { executeGraphql } from "@/api/graphqlApi";
import { CollectionsGetAllDocument, ProductsGetByCollectionSlugDocument } from "@/gql/graphql";

export const getAllCollections = async () => {
	const graphqlResponse = await executeGraphql({ query: CollectionsGetAllDocument, variables: {} });

	return graphqlResponse.collections;
};

export const getProductsByCollectionSlug = async (collectionSlug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCollectionSlugDocument,
		variables: { slug: collectionSlug },
	});

	return graphqlResponse.collection;
};
