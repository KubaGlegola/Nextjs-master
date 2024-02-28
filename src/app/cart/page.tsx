import { redirect } from "next/navigation";
import { getCartFromCookies } from "@/api/cart";
import { formatMoney } from "@/utils/utils";
import { CartItemQuantity } from "@/ui/atoms/CartItemQuantity";
import { RemoveButton } from "@/ui/atoms/RemoveButton";

export default async function CartPage() {
	const cart = await getCartFromCookies();

	if (!cart) {
		redirect("/");
	}

	return (
		<div className="mt-10">
			<table className="table-fixed">
				<thead>
					<tr>
						<th>Product</th>
						<th className="px-4 text-center">Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.items.map((item) => {
						return (
							<tr key={item.product.id}>
								<td>{item.product.name}</td>
								<td className="px-4 text-center">
									<CartItemQuantity
										cartId={cart.id}
										itemId={item.product.id}
										quantity={item.quantity}
									/>
								</td>
								<td>{formatMoney(item.product.price)}</td>
								<td>
									<RemoveButton cartId={cart.id} itemId={item.product.id} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
