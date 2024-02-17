import { executeGraphql } from "@/api/graphqlApi";
import { ProductsGetListDocument, type Scalars } from "@/gql/graphql";
import { type ProductItemType } from "@/ui/types";

export const getProductsList = async (): Promise<ProductItemType[]> => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	return graphqlResponse.products.map((product) => {
		return {
			id: product.id,
			category: product.categories[0]?.name || "",
			name: product.name,
			description: product.description,
			price: product.price,
			coverImage: product.images[0] && {
				src: product.images[0].url,
				alt: product.name,
			},
		};
	});
};
