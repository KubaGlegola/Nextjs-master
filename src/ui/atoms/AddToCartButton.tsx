"use client";
import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();

	return (
		<button
			type="submit"
			disabled={formStatus.pending}
			className="w-full rounded-md border bg-slate-700 px-8 py-3 text-white transition-colors duration-300 hover:bg-slate-800 disabled:bg-slate-300 disabled:text-black"
		>
			Add to cart
		</button>
	);
};
