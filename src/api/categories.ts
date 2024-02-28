import { executeGraphql } from "@/api/graphqlApi";
import { CategoriesGetAllDocument } from "@/gql/graphql";

export const getAllCategories = async () => {
	const graphqlResponse = await executeGraphql({ query: CategoriesGetAllDocument, variables: {} });

	return graphqlResponse.categories.data;
};
