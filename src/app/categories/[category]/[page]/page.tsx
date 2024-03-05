import { notFound } from "next/navigation";
import { type Metadata, type Route } from "next";
import { getProductsByCategory } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organism/ProductsList";
import { PageTitle } from "@/ui/atoms/PageTitle";

export async function generateMetadata({
	params,
}: {
	params: { category: string };
}): Promise<Metadata> {
	const response = await getProductsByCategory(1, 0, params.category);

	if (response.category) {
		return {
			title: response.category.name,
		};
	}

	return {
		title: "Categories",
	};
}

export default async function ProductListPage({
	params,
}: {
	params: { category: string; page: string };
}) {
	const productsPerPage = 4;

	const response = await getProductsByCategory(
		productsPerPage,
		(+params.page - 1) * productsPerPage,
		params.category,
	);

	if (!response.category) {
		return notFound();
	}
	const totalPages = response.category.products.totalCount;
	const products = response.category.products.edges.map((edge) => edge.node);

	return (
		<section>
			<PageTitle>{response.category.name}</PageTitle>
			<ProductList products={products} />
			<Pagination totalPages={totalPages} href={`/categories/${params.category}` as Route} />
		</section>
	);
}
