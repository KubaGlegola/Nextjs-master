import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organism/ProductsList";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { getProductsList } from "@/api/products";
import { getAllCollections } from "@/api/collections";
import { CollectionItem } from "@/ui/atoms/CollectionItem";

export default async function HomePage() {
	const response = await getProductsList(4, 0);
	const products = response.edges.map((edge) => edge.node);
	const collectionsResponse = await getAllCollections();
	const collections = collectionsResponse.edges.map((edge) => edge.node);

	if (!products) {
		return notFound();
	}

	return (
		<>
			<section className="mb-8">
				<PageTitle>New collections</PageTitle>
				<ul className="flex justify-between gap-4">
					{collections.map((collectionItem) => (
						<li key={collectionItem.slug}>
							<CollectionItem collectionItem={collectionItem} />
						</li>
					))}
				</ul>
			</section>
			<section>
				<ProductList products={products} />
			</section>
		</>
	);
}
