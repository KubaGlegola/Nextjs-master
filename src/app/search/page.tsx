import { getProductsBySerach } from "@/api/products";
import { ProductList } from "@/ui/organism/ProductsList";

type SearchPageProps = {
	searchParams: {
		query: string;
	};
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
	const response = await getProductsBySerach(searchParams.query);

	if (!response.data) {
		return <div>no products found</div>;
	}

	return <ProductList products={response.data} />;
}
