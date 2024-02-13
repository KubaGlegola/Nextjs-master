"use client";

import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
	className = "text-blue-500 hover:text-blue-600",
	activeClassName = "text-blue-600 border-b-2 border-blue-600",
}: ActiveLinkProps<T>) => {
	const currentPathname = usePathname();
	const isActive = exact ? currentPathname === href : currentPathname.startsWith(href);

	return (
		<Link
			href={href}
			className={clsx(className, isActive && activeClassName)}
			aria-current={isActive}
		>
			{children}
		</Link>
	);
};
