import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductItemType } from "@/ui/types";

type ProductItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<ProductCoverImage alt={product.coverImage.alt} src={product.coverImage.src} />
				<ProductListItemDescription product={product} />
			</Link>
		</li>
	);
};
