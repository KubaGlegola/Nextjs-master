import Link from "next/link";

export const CheckOutButton = () => {
	return (
		<Link
			href="/payment"
			className="mt-4 block w-full rounded-md border bg-slate-700 px-8 py-3 text-center text-white transition-colors duration-300 hover:bg-slate-800 disabled:bg-slate-300 disabled:text-black"
		>
			Check Out
		</Link>
	);
};
