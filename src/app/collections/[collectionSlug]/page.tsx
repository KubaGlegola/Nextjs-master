import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductList } from "@/ui/organism/ProductsList";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { getProductsByCollectionSlug } from "@/api/collections";

type Props = {
	params: { collectionSlug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const response = await getProductsByCollectionSlug(params.collectionSlug);

	if (response) {
		return {
			title: response.name,
		};
	}

	return { title: "Collections" };
}

export default async function ProductListPage({ params }: { params: { collectionSlug: string } }) {
	const response = await getProductsByCollectionSlug(params.collectionSlug);

	if (!response?.products) {
		return notFound();
	}

	const products = response.products.edges.map((edge) => edge.node);

	return (
		<section>
			<PageTitle>{response.name}</PageTitle>
			<ProductList products={products} />
		</section>
	);
}
