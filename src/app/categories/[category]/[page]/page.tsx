import { notFound } from "next/navigation";
import { type Metadata, type Route } from "next";
import { getProductsByCategory } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organism/ProductsList";
import { PageTitle } from "@/ui/atoms/PageTitle";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: `Categories`,
	};
}

export default async function ProductListPage({
	params,
}: {
	params: { category: string; page: string };
}) {
	const products = await getProductsByCategory(params.category);

	if (!products) {
		return notFound();
	}

	const productsOnPage = products.slice(4 * (Number(params.page) - 1), 4 * Number(params.page));
	const totalPages = Math.ceil(products.length / 4);

	return (
		<section>
			<PageTitle>Categories</PageTitle>
			<ProductList products={productsOnPage} />
			<Pagination totalPages={totalPages} href={`/categories/${params.category}` as Route} />
		</section>
	);
}
