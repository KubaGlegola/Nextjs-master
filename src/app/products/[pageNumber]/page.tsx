import { getProductsListByPage } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organism/ProductsList";

export async function generateStaticParams() {
	return [
		{ pageNumber: "1" },
		{ pageNumber: "2" },
		{ pageNumber: "3" },
		{ pageNumber: "4" },
		{ pageNumber: "5" },
	];
}

export default async function ProductListPage({ params }: { params: { pageNumber: string } }) {
	const { pageNumber } = params;
	const offset = +pageNumber * 20;
	const products = await getProductsListByPage(offset);

	return (
		<section>
			<ProductList products={products} />
			<Pagination totalPages={5} />
		</section>
	);
}
