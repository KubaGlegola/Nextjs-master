import { executeGraphql } from "@/api/graphqlApi";
import { CategoryGetAllDocument } from "@/gql/graphql";

export const getAllCategories = async () => {
	const graphqlResponse = await executeGraphql({ query: CategoryGetAllDocument, variables: {} });

	return graphqlResponse.categories;
};
