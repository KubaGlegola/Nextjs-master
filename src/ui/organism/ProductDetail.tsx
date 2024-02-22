import { type ProductItemFragment } from "@/gql/graphql";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { RelatedProducts } from "@/ui/molecules/RelatedProducts";
import { formatMoney } from "@/utils";

type ProductDetailProps = { product: ProductItemFragment };

export const ProductDetail = (props: ProductDetailProps) => {
	const { product } = props;

	return (
		<>
			<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 ">
				{product.images[0] && (
					<ProductCoverImage
						alt={product.name}
						src={product.images[0].url}
						sizes="(min-width: 1024px) 450px, 450px"
					/>
				)}
				<div>
					<h1 className="text-4xl font-bold">{product.name}</h1>
					<h2 className="my-3 text-2xl font-semibold text-gray-700">
						{formatMoney(product.price)}
					</h2>
					<p className="text-lg">{product.description}</p>
				</div>
			</div>
			<RelatedProducts />
		</>
	);
};
