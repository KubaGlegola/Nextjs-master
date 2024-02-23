import { notFound } from "next/navigation";
import { getCollectionsListBySlug } from "@/api/products";
import { ProductList } from "@/ui/organism/ProductsList";
import { PageTitle } from "@/ui/atoms/PageTitle";

export default async function ProductListPage({ params }: { params: { collectionSlug: string } }) {
	const products = await getCollectionsListBySlug(params.collectionSlug);

	if (!products) {
		return notFound();
	}

	return (
		<section>
			<PageTitle>{params.collectionSlug}</PageTitle>
			<ProductList products={products} />
		</section>
	);
}
