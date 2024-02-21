import { notFound } from "next/navigation";
import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organism/ProductsList";

export default async function HomePage() {
	const { data } = await getProductsList(4, 0);

	if (!data) {
		return notFound();
	}

	return (
		<section>
			<ProductList products={data} />
		</section>
	);
}
