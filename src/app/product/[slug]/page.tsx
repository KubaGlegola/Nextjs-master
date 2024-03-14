import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductDetail } from "@/ui/organism/ProductDetail";
import { RelatedProducts } from "@/ui/molecules/RelatedProducts";
import { getProductById } from "@/api/products";
import { ReviewsList } from "@/ui/molecules/ReviewsList";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const product = await getProductById(params.slug);

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

export default async function ProductPage({ params }: { params: { slug: string } }) {
	const product = await getProductById(params.slug);

	if (!product) {
		return notFound();
	}
	const reviews = product.reviews.edges.map((edge) => edge.node);

	const productRating = product.rating ?? 0;

	return (
		<>
			<ProductDetail productSlug={params.slug} />

			{product.categories.edges[0] && (
				<Suspense>
					<RelatedProducts productCategory={product.categories.edges[0]?.node.slug} />
				</Suspense>
			)}
			<Suspense>
				<ReviewsList
					productId={product.id}
					reviews={reviews}
					totalReviewsCount={product.reviews.totalCount}
					productRating={productRating}
				/>
			</Suspense>
		</>
	);
}
