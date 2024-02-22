import Link from "next/link";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

type ProductListItemProps = {
	product: ProductsListItemFragment;
};

export const ProductListItem = (props: ProductListItemProps) => {
	const { product } = props;

	return (
		<Link href={`/product/${product.id}`}>
			{product.images[0] && <ProductCoverImage alt={product.name} src={product.images[0].url} />}
			<ProductListItemDescription product={product} />
		</Link>
	);
};
