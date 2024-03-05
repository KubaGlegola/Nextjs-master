import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organism/ProductsList";

export default async function ProductListPage({ params }: { params: { pageNumber: string } }) {
	const productsPerPage = 8;

	const response = await getProductsList(
		productsPerPage,
		(+params.pageNumber - 1) * productsPerPage,
	);

	const products = response.edges.map((edge) => edge.node);
	const totalPages = Math.ceil(response.totalCount / productsPerPage);

	return (
		<section>
			<ProductList products={products} />
			<Pagination totalPages={totalPages} href="/products" />
		</section>
	);
}
