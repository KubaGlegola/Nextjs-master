import { type Metadata } from "next";
import { ProductDetail } from "@/ui/organism/ProductDetail";
import { executeGraphql } from "@/api/graphqlApi";
import { ProductByIdDocument } from "@/gql/graphql";

// export async function generateMetadata({
// 	params,
// }: {
// 	params: { productId: string };
// }): Promise<Metadata> {
// 	const product = await getProductById(params.productId);

// 	const title = product.name;
// 	const description = product.description;

// 	return {
// 		title: title,
// 		description: description,
// 	};
// }

export default async function ProductPage({ params }: { params: { productId: string } }) {
	return <ProductDetail product={product} />;
}
