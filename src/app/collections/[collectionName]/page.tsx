import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organism/ProductsList";

export default async function ProductListPage({ params }: { params: { pageNumber: string } }) {
	const { meta, data } = await getProductsList(4, (parseInt(params.pageNumber) - 1) * 4);

	const totalPages = Math.ceil(meta.total / 4);

	return (
		<section>
			<ProductList products={data} />
			<Pagination totalPages={totalPages} />
		</section>
	);
}
