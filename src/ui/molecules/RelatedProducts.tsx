import { getProductsByCategory } from "@/api/products";
import { ProductList } from "@/ui/organism/ProductsList";

export const RelatedProducts = async ({ productCategory }: { productCategory: string }) => {
	const response = await getProductsByCategory(4, 0, productCategory);

	if (!response.category) {
		return null;
	}
	const products = response.category.products.edges.map((edge) => edge.node);

	return (
		<article data-testid="related-products" className="my-8">
			<h2 className="mb-3 text-2xl font-semibold">Related products</h2>
			<ProductList products={products} />
		</article>
	);
};
