import { notFound } from "next/navigation";
import { getProductsByCategory } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organism/ProductsList";

export default async function ProductListPage({
	params,
}: {
	params: { category: string; page: string };
}) {
	const products = await getProductsByCategory(params.category);

	if (!products) {
		return notFound();
	}

	console.log(products);

	return (
		<section>
			<ProductList products={products} />
			<Pagination totalPages={1} />
		</section>
	);
}
