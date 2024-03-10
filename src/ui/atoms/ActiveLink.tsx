"use client";

import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	exact = true,
	className = "flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 border-transparent px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700",
	activeClassName = "text-blue-500 border-blue-500",
}: ActiveLinkProps<T>) => {
	const currentPathname = usePathname();
	const hrefWithoutQuery = href.split("?")[0];
	const isActive = exact
		? currentPathname === href
		: currentPathname.startsWith(hrefWithoutQuery ? hrefWithoutQuery : href);

	return (
		<Link
			href={href}
			className={twMerge(className, isActive && activeClassName)}
			aria-current={isActive ? isActive : undefined}
			role="link"
		>
			{children}
		</Link>
	);
};
