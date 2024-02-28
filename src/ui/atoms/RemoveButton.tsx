"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeItemFromCart } from "@/utils/actions";

export const RemoveButton = ({ cartId, itemId }: { cartId: string; itemId: string }) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	return (
		<button
			className="text-red-500 disabled:text-slate-400"
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await removeItemFromCart(cartId, itemId);
					router.refresh();
				});
			}}
		>
			Remove
		</button>
	);
};
