import { type ProductsListItemFragment } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = (props: { products: ProductsListItemFragment[] }) => {
	const { products } = props;

	return (
		<ul
			className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => {
				return (
					<li key={product.id}>
						<ProductListItem product={product} />
					</li>
				);
			})}
		</ul>
	);
};
