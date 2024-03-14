"use client";

import { useState } from "react";

export const ProductQuantity = () => {
	const [quantity, setQuantity] = useState(1);
	return (
		<div className="flex gap-2">
			<button
				className="h-full w-8 rounded-md  bg-slate-100  shadow-md disabled:cursor-not-allowed disabled:bg-slate-300 "
				onClick={(e) => {
					e.preventDefault();
					setQuantity((prevQuantity) => prevQuantity - 1);
				}}
				disabled={quantity <= 1}
			>
				-
			</button>
			<input
				min="1"
				name="quantity"
				type="number"
				value={quantity}
				onChange={(e) => setQuantity(+e.target.value)}
				className="max-w-16 rounded-md border bg-slate-100 text-center shadow-md"
			/>
			<button
				className="h-full w-8 rounded-md border bg-slate-100 text-black shadow-md"
				onClick={(e) => {
					e.preventDefault();
					setQuantity((prevQuantity) => prevQuantity + 1);
				}}
			>
				+
			</button>
		</div>
	);
};
