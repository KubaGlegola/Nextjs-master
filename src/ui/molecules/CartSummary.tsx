import Link from "next/link";
import { formatMoney } from "@/utils/utils";

export const CartSummary = ({ orderValue }: { orderValue: number }) => {
	return (
		<div className="h-min w-1/3 bg-white p-4 shadow-md">
			<h1 className="mb-4 text-2xl font-semibold">Cart Summary</h1>

			<div className="flex justify-between">
				<span>Order value:</span>
				<span className="font-semibold">{formatMoney(orderValue)}</span>
			</div>
			<Link
				href="/payment"
				className="mt-4 block w-full rounded-md border bg-slate-700 px-8 py-3 text-center text-white transition-colors duration-300 hover:bg-slate-800 disabled:bg-slate-300 disabled:text-black"
			>
				Check Out
			</Link>
		</div>
	);
};
