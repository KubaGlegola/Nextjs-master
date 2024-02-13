import { type ProductItemType } from "@/ui/types";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { formatMoney } from "@/utils";

type ProductDetailProps = { product: ProductItemType };

export const ProductDetail = ({ product }: ProductDetailProps) => {
	return (
		<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 ">
			<ProductCoverImage
				alt={product.coverImage.alt}
				src={product.coverImage.src}
				sizes="(min-width: 1024px) 450px, 450px"
			/>
			<div>
				<h1 className="text-4xl font-bold">{product.name}</h1>
				<h2 className="my-3 text-2xl font-semibold text-gray-700">{formatMoney(product.price)}</h2>
				<p className="text-lg">{product.description}</p>
			</div>
		</div>
	);
};
