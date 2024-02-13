import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductDetail } from "@/ui/organism/ProductDetail";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	const title = product.name;
	const description = product.description;

	return {
		title: title,
		description: description,
	};
}

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return <ProductDetail product={product} />;
}
