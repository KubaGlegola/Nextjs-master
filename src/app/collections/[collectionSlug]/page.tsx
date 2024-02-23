import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCollectionsListBySlug } from "@/api/products";
import { ProductList } from "@/ui/organism/ProductsList";
import { PageTitle } from "@/ui/atoms/PageTitle";

type Props = {
	params: { collectionSlug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const response = await getCollectionsListBySlug(params.collectionSlug);

	if (response) {
		return {
			title: response.name,
		};
	}

	return { title: "Collections" };
}

export default async function ProductListPage({ params }: { params: { collectionSlug: string } }) {
	const response = await getCollectionsListBySlug(params.collectionSlug);

	if (!response) {
		return notFound();
	}

	return (
		<section>
			<PageTitle>{response.name}</PageTitle>
			<ProductList products={response.products} />
		</section>
	);
}
