import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organism/ProductsList";

export const RelatedProducts = async () => {
	const products = await getProductsList(4, 0);

	return (
		<article data-testid="related-products" className="my-8">
			<h2 className="mb-3 text-2xl font-semibold">Related products</h2>
			<ProductList products={products.data} />
		</article>
	);
};
