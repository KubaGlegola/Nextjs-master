import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/ui/organism/ProductDetail";
import { getProductById, getProductReviews } from "@/api/products";
import { RelatedProducts } from "@/ui/molecules/RelatedProducts";
import { ReviewsList } from "@/ui/molecules/ReviewsList";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	if (!product) {
		throw notFound();
	}

	const title = product.name;
	const description = product.description;

	return {
		title: title,
		description: description,
	};
}

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	const reviews = await getProductReviews(params.productId);

	if (!product) {
		throw notFound();
	}

	return (
		<>
			<ProductDetail productId={params.productId} />
			<RelatedProducts />
			<ReviewsList productId={params.productId} reviews={reviews?.reviews} />
		</>
	);
}
