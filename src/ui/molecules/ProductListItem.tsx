import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProdcutListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductItemType } from "@/ui/types";

export const ProductListItem = ({ product }: ProductItemType) => {
	return (
		<li>
			<article>
				<ProductCoverImage alt={product.coverImage.alt} src={product.coverImage.src} />
				<ProdcutListItemDescription product={product} />
			</article>
		</li>
	);
};
