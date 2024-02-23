import { executeGraphql } from "@/api/graphqlApi";
import { GetAllCollectionsDocument } from "@/gql/graphql";

export const getAllCollections = async () => {
	const graphqlResponse = await executeGraphql(GetAllCollectionsDocument, {});

	return graphqlResponse.collections.data;
};
