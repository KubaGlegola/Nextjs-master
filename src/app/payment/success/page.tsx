import Image from "next/image";
import Link from "next/link";

export default async function SuccessPaymentPage() {
	return (
		<section className="flex flex-col items-center">
			<Image src="/confirmed.svg" width={250} height={250} alt="Success" className="my-5" />
			<p className=" text-lg font-semibold text-slate-700 sm:text-xl">Thank you!</p>
			<h1 className="mb-2 text-2xl font-bold sm:text-4xl">Your payment was successful</h1>

			<Link
				href="/"
				className="block rounded-md bg-slate-700 px-6 py-3 text-white shadow-md shadow-slate-600 transition-colors hover:bg-slate-800"
			>
				Back to home
			</Link>
		</section>
	);
}
