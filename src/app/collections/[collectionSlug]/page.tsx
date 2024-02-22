import { notFound } from "next/navigation";
import { getCollectionsListBySlug } from "@/api/products";
import { ProductList } from "@/ui/organism/ProductsList";

export default async function ProductListPage({ params }: { params: { collectionSlug: string } }) {
	const products = await getCollectionsListBySlug(params.collectionSlug);

	console.log(products);

	if (!products) {
		return notFound();
	}

	return (
		<section>
			<ProductList products={products} />
		</section>
	);
}
