import Link from "next/link";
import { type Route } from "next";
import { ShoppingCart } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Search } from "@/ui/atoms/Search";
import { Navigation } from "@/ui/molecules/Navigation";
import { getCartFromCookies } from "@/api/cart";

export const Navbar = async () => {
	const cart = await getCartFromCookies();
	const items = cart?.items.edges.map((edge) => edge.node) ?? [];
	const quantity = items.reduce((acc, item) => acc + item.quantity, 0) ?? 0;

	return (
		<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
			<div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
				<Navigation />
				<div className="flex items-center justify-center lg:justify-start">
					<Search />
					<div className="ml-auto flex h-full items-center lg:ml-4">
						<Link
							className="flex h-full w-16 items-center justify-center border-b-2 border-transparent px-2 text-center text-sm font-medium text-slate-500  hover:text-slate-700"
							href={"/cart" as Route}
						>
							<ShoppingCart className="h-6 w-6 flex-shrink-0" />
							<div className="w-4">
								<span className="ml-2 text-sm font-medium ">{quantity}</span>
								<span className="sr-only">items in cart, view bag</span>
							</div>
						</Link>
						<SignedIn>
							<UserButton userProfileMode="navigation" />
						</SignedIn>
						<SignedOut>
							<SignInButton />
						</SignedOut>
					</div>
				</div>
			</div>
		</div>
	);
};
