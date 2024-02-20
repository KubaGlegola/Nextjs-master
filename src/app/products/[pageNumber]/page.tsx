import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organism/ProductsList";

export default async function ProductListPage({ params }: { params: { pageNumber: string } }) {
	const productsPerPage = process.env.ITEMS_PER_PAGE ? +process.env.ITEMS_PER_PAGE : 16;

	const { meta, data } = await getProductsList(
		productsPerPage,
		(+params.pageNumber - 1) * productsPerPage,
	);

	const totalPages = Math.ceil(meta.total / productsPerPage);

	return (
		<section>
			<ProductList products={data} />
			<Pagination totalPages={totalPages} />
		</section>
	);
}
