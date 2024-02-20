import { executeGraphql } from "@/api/graphqlApi";
import { GetAllCategoriesDocument } from "@/gql/graphql";

export const getAllCategories = async () => {
	const graphqlResponse = await executeGraphql(GetAllCategoriesDocument, {});

	return graphqlResponse.categories.data;
};
