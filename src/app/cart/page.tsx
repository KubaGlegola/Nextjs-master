import { redirect } from "next/navigation";
import NextImage from "next/image";
import { getCartFromCookies } from "@/api/cart";
import { formatMoney } from "@/utils/utils";
import { CartItemQuantity } from "@/ui/atoms/CartItemQuantity";
import { RemoveButton } from "@/ui/atoms/RemoveButton";
import { CartSummary } from "@/ui/atoms/CartSummary";

export default async function CartPage() {
	const cart = await getCartFromCookies();
	if (!cart) {
		redirect("/");
	}

	const orderValue = cart.items.reduce((acc, item) => {
		return acc + item.product.price * item.quantity;
	}, 0);

	return (
		<div className="mt-10 flex justify-between gap-8 ">
			<table className="w-full bg-white p-4 shadow-md	">
				<thead>
					<tr>
						<th className="px-4 py-4 text-start">Product</th>
						<th className="text-start">Quantity</th>
						<th className="text-start">Unit Price</th>
						<th className="text-start">Price</th>
						<th className="text-start">Remove</th>
					</tr>
				</thead>
				<tbody>
					{cart.items.map((item) => {
						return (
							<tr key={item.product.id}>
								<td className="flex w-max items-center gap-2 px-4">
									{item.product.images[0] && (
										<NextImage
											src={item.product.images[0].url}
											alt={item.product.name}
											width={100}
											height={100}
										/>
									)}
									{item.product.name}
								</td>
								<td>
									<CartItemQuantity
										cartId={cart.id}
										itemId={item.product.id}
										quantity={item.quantity}
									/>
								</td>
								<td>{formatMoney(item.product.price)}</td>
								<td>{formatMoney(item.product.price * item.quantity)}</td>
								<td>
									<RemoveButton cartId={cart.id} itemId={item.product.id} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<CartSummary orderValue={orderValue} />
		</div>
	);
}
