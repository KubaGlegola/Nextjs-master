import { notFound } from "next/navigation";
import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organism/ProductsList";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { getAllCollections } from "@/api/collections";
import { CollectionItem } from "@/ui/atoms/CollectionItem";

export default async function HomePage() {
	const { data } = await getProductsList(4, 0);
	const collections = await getAllCollections();

	if (!data) {
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
				<ProductList products={data} />
			</section>
		</>
	);
}
