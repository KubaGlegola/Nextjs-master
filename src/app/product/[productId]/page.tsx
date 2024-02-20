// import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/ui/organism/ProductDetail";
import { getProductById } from "@/api/products";

// export async function generateMetadata({
// 	params,
// }: {
// 	params: { productId: string };
// }): Promise<Metadata> {
// 	const product = await getProductById(params.productId);

// const title = product.name;
// const description = product.description;

// 	return {
// 		title: title,
// 		description: description,
// 	};
// }

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	if (!product) {
		throw notFound();
	}

	return <ProductDetail product={product} />;
}
