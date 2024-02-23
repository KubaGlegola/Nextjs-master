import { notFound } from "next/navigation";
import { type Route } from "next";
import { getProductsByCategory } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organism/ProductsList";
import { PageTitle } from "@/ui/atoms/PageTitle";

export default async function ProductListPage({
	params,
}: {
	params: { category: string; page: string };
}) {
	const products = await getProductsByCategory(params.category);

	if (!products) {
		return notFound();
	}

	return (
		<section>
			<PageTitle>{params.category}</PageTitle>
			<ProductList products={products} />
			<Pagination totalPages={1} href={`/categories/${params.category}` as Route} />
		</section>
	);
}
