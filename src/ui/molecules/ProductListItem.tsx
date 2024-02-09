import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductItemType } from "@/ui/types";

type ProductItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductItemProps) => {
	return (
		<li>
			<article>
				<ProductCoverImage alt={product.coverImage.alt} src={product.coverImage.src} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
