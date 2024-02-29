import { CheckOutButton } from "@/ui/atoms/CheckOutButton";
import { formatMoney } from "@/utils/utils";

export const CartSummary = ({ orderValue }: { orderValue: number }) => {
	return (
		<div className="h-min w-1/3 bg-white p-4 shadow-md">
			<h1 className="mb-4 text-2xl font-semibold">Cart Summary</h1>

			<div className="flex justify-between">
				<span>Order value:</span>
				<span className="font-semibold">{formatMoney(orderValue)}</span>
			</div>
			<CheckOutButton />
		</div>
	);
};
