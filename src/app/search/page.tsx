import { getProductsBySerach } from "@/api/products";
import { ProductList } from "@/ui/organism/ProductsList";

type SearchPageProps = {
	searchParams: {
		query: string;
	};
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
	const response = await getProductsBySerach(searchParams.query);

	const products = response.products.edges.map((edge) => edge.node);

	return <ProductList products={products} />;
}
