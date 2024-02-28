import { executeGraphql } from "@/api/graphqlApi";
import { CollectionsGetAllDocument } from "@/gql/graphql";

export const getAllCollections = async () => {
	const graphqlResponse = await executeGraphql({ query: CollectionsGetAllDocument, variables: {} });

	return graphqlResponse.collections.data;
};
