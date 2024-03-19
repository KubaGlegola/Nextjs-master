import { getProductsList } from "@/api/products";
import { type ProductSortBy, type SortDirection } from "@/gql/graphql";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { Pagination } from "@/ui/molecules/Pagination";
import { SortSelect } from "@/ui/molecules/SortSelect";
import { ProductList } from "@/ui/organism/ProductsList";

export default async function ProductListPage({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { [key: string]: string | undefined };
}) {
	const productsPerPage = 4;

	const sortDirection = searchParams.sortOrder ? (searchParams.sortOrder.toUpperCase() as SortDirection) : undefined;

	const sort = searchParams.sort ? (searchParams.sort.toUpperCase() as ProductSortBy) : undefined;

	const response = await getProductsList(
		productsPerPage,
		(+params.pageNumber - 1) * productsPerPage,
		sortDirection,
		sort,
	);

	const products = response.edges.map((edge) => edge.node);
	const totalPages = Math.ceil(response.totalCount / productsPerPage);

	return (
		<>
			<section>
				<div className="mb-4 flex items-center justify-between">
					<PageTitle>All Products</PageTitle>
					<SortSelect />
				</div>
				<ProductList products={products} />
				<Pagination totalPages={totalPages} href="/products" searchParams={searchParams} />
			</section>
		</>
	);
}
