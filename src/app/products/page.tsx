import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organism/ProductsList";

export default async function ProductListPage() {
	const products = await getProductsList();

	return (
		<section>
			<ProductList products={products} />
			<Pagination totalPages={1} />
		</section>
	);
}
