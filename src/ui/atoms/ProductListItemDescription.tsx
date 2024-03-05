import { type ProductsListItemFragment } from "@/gql/graphql";
import { Rating } from "@/ui/atoms/Rating";
import { formatMoney } from "@/utils/utils";

type ProductListItemDescriptionProps = {
	product: ProductsListItemFragment;
};

export const ProductListItemDescription = (props: ProductListItemDescriptionProps) => {
	const { name, categories, price, rating } = props.product;

	const ratingValue = Number(rating?.toFixed(2));
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				{categories.edges[0] && (
					<p className="text-sm text-gray-500">
						<span className="sr-only">Category: </span> {categories.edges[0].node.name}
					</p>
				)}
			</div>
			<div className="text-sm font-medium text-gray-900">
				<span className="sr-only ">Price:</span>
				<span className="block text-right">{formatMoney(price)} </span>
				<Rating rating={ratingValue} />
			</div>
		</div>
	);
};
